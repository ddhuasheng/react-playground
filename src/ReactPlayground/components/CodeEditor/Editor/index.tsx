import {
  Editor as MonacoEditor,
  OnMount,
  EditorProps,
} from '@monaco-editor/react'
import { createATA } from './ata'

export interface EditorFile {
  name: string
  value: string
  language: string
}

interface Props {
  file: EditorFile
  onChange?: EditorProps['onChange']
  options?: EditorProps['options']
}

function Editor({ file, onChange, options }: Props) {
  const handleEditorMount: OnMount = (editor, monaco) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyL, () => {
      editor.getAction('editor.action.formatDocument')?.run() // 格式化文档
    })

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.React,
      esModuleInterop: true,
    })

    const ata = createATA((code, path) => {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        code,
        `file://${path}`
      )
    })

    editor.onDidChangeModelContent(() => {
      ata(editor.getValue())
    })

    ata(editor.getValue())
  }

  return (
    <MonacoEditor
      height="100%"
      path={file.name}
      language={file.language}
      value={file.value}
      onMount={handleEditorMount}
      onChange={onChange}
      options={{
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        fontSize: 14,
        tabSize: 2,
        scrollbar: {
          verticalScrollbarSize: 6,
          horizontalScrollbarSize: 6,
        },
        ...options,
      }}
    />
  )
}

export default Editor
