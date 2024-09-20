import FileNameList from './FileNameList'
import Editor from './Editor'
import { useContext } from 'react'
import { PlaygroundContext } from '../../PlaygroundContext'
import { debounce } from 'loadsh'

function CodeEditor() {
  const { selectedFileName, files, setFiles, theme } =
    useContext(PlaygroundContext)

  const changeHandle = (code: string) => {
    const newFile = files[selectedFileName]
    newFile.value = code
    setFiles({
      ...files,
      [selectedFileName]: newFile,
    })
  }

  const file = files[selectedFileName]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <FileNameList />
      <Editor
        file={file}
        onChange={debounce(changeHandle, 500)}
        options={{ theme: `vs-${theme}` }}
      />
    </div>
  )
}

export default CodeEditor
