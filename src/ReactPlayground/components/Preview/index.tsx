import { useContext, useEffect, useRef, useState } from 'react'
import { PlaygroundContext } from '../../PlaygroundContext'
import CompilerWorker from './compiler.worker?worker'
import iframeRaw from './iframe.html?raw'
import { IMPORT_MAP_FILE_NAME } from '../../consts'
import Message from '../Message'
import { debounce } from 'loadsh'

interface MessageData {
  data: {
    type: 'warning' | 'error'
    content: string
  }
}

function Preview() {
  const { files } = useContext(PlaygroundContext)

  const [compiledCode, setCompiledCode] = useState('')

  const compilerWorkerRef = useRef<Worker>()

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

  useEffect(
    debounce(() => {
      setTimeout(() => {
        compilerWorkerRef.current?.postMessage({
          type: 'COMPILE',
          data: files,
        })
      })
    }, 500) as any,
    [files]
  )

  useEffect(() => {
    setIframeUrl(getIframeUrl())
  }, [files[IMPORT_MAP_FILE_NAME].value, compiledCode])

  const messageHandler = (e: MessageData) => {
    setMessageData(e.data)
  }

  useEffect(() => {
    if (!compilerWorkerRef.current) {
      compilerWorkerRef.current = new CompilerWorker()
      compilerWorkerRef.current.addEventListener('message', ({ data }) => {
        if (data.type === 'COMPILED_CODE') setCompiledCode(data.data)
      })
    }
  }, [])

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
