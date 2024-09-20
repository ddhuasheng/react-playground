import { useContext, useEffect, useState } from 'react'
import { PlaygroundContext } from '../../PlaygroundContext'
import { compile } from './compiler'
// import Editor from '../CodeEditor/Editor'
import iframeRaw from './iframe.html?raw'
import { IMPORT_MAP_FILE_NAME } from '../../consts'
import Message from '../Message'

interface MessageData {
  data: {
    type: 'warning' | 'error'
    content: string
  }
}

function Preview() {
  const { files } = useContext(PlaygroundContext)

  const [compiledCode, setCompiledCode] = useState('')

  const [messageData, setMessageData] = useState<MessageData['data']>({
    type: 'warning',
    content: '',
  })

  const getIframeUrl = () => {
    const res = iframeRaw
      .replace(
        '<script type="importmap"></script>',
        `<script type="importmap">${files[IMPORT_MAP_FILE_NAME].value}</script>`
      )
      .replace(
        '<script type="module" id="appSrc"></script>',
        `<script type="module" id="appSrc">${compiledCode}</script>`
      )
    return URL.createObjectURL(new Blob([res], { type: 'text/html' }))
  }

  const [iframeUrl, setIframeUrl] = useState(getIframeUrl())

  useEffect(() => {
    setCompiledCode(compile(files))
  }, [files])

  useEffect(() => {
    setIframeUrl(getIframeUrl())
  }, [files[IMPORT_MAP_FILE_NAME].value, compiledCode])

  const messageHandler = (e: MessageData) => {
    setMessageData(e.data)
  }

  useEffect(() => {
    window.addEventListener('message', messageHandler)
    return () => {
      window.removeEventListener('message', messageHandler)
    }
  }, [])

  return (
    <div style={{ height: '100%' }}>
      <iframe
        src={iframeUrl}
        style={{
          width: '100%',
          height: '100%',
          padding: 0,
          border: 'none',
        }}
      />

      <Message {...messageData} />
    </div>
  )
}

export default Preview
