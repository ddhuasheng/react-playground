import { useRef } from 'react'
import { transform } from '@babel/standalone'
import { PluginObj } from '@babel/core'
import Editor from '@monaco-editor/react'
import iframeHtml from './iframe.html?raw'

const iframeUrl = URL.createObjectURL(
  new Blob([iframeHtml], { type: 'text/html' })
)

function App() {
  // const transformImportSourcePlugin: PluginObj = {
  //   visitor: {
  //     ImportDeclaration(path) {
  //       if (textareaRef.current) {
  //         const url = URL.createObjectURL(
  //           new Blob([textareaRef.current.value], {
  //             type: 'application/javascript',
  //           })
  //         )

  //         path.node.source.value = url
  //       }
  //     },
  //   },
  // }

  const code = `import { useEffect, useState } from 'react'

    function App() {
      const [num, setNum] = useState(0)

      return (
        <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
      );
    }

    export default App
  `

  // const onClick = () => {
  //   if (!textareaRef.current) {
  //     return
  //   }

  //   const res = transform(textareaRef.current.value, {
  //     presets: ['react', 'typescript'],
  //     filename: 'guang.tsx',
  //     plugins: [transformImportSourcePlugin],
  //   })
  //   console.log(res.code)
  // }

  return (
    <>
      <Editor height="500px" defaultLanguage="javascript" defaultValue={code} />
      <iframe
        src={iframeUrl}
        style={{
          width: '100%',
          height: '100%',
          padding: 0,
          border: 'none',
        }}
      ></iframe>
    </>
  )
}

export default App
