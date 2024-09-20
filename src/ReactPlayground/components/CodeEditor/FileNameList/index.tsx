import { useContext, useEffect, useState } from 'react'
import { PlaygroundContext } from '../../../PlaygroundContext'
import FileNameItem from './FileNameItem'
import styles from './index.module.scss'
import {
  APP_COMPONENT_FILE_NAME,
  ENTRY_FILE_NAME,
  IMPORT_MAP_FILE_NAME,
} from '../../../consts'

const readonlyFiles = [
  APP_COMPONENT_FILE_NAME,
  ENTRY_FILE_NAME,
  IMPORT_MAP_FILE_NAME,
]

function FileNameList() {
  const {
    files,
    removeFile,
    addFile,
    updateFileName,
    setSelectedFileName,
    selectedFileName,
  } = useContext(PlaygroundContext)

  const [tabs, setTabs] = useState([''])
  const [creating, setCreating] = useState(false)

  useEffect(() => {
    setTabs(Object.keys(files))
  }, [files])

  const onEditComplete = (name: string, oldName: string) => {
    updateFileName(oldName, name)
    setCreating(false)
  }

  const addTab = () => {
    addFile('Comp' + Math.random().toString().substring(2, 6) + '.tsx')
    setCreating(true)
  }

  return (
    <div className={styles.tabs}>
      {tabs.map((tab, index, arr) => {
        return (
          <FileNameItem
            key={tab}
            value={tab}
            readonly={readonlyFiles.includes(tab)}
            actived={selectedFileName === tab}
            creating={creating && index === arr.length - 1}
            onClick={() => setSelectedFileName(tab)}
            onEditComplete={(name) => onEditComplete(name, tab)}
            onRemove={() => removeFile(tab)}
          ></FileNameItem>
        )
      })}

      <div className={styles.add} onClick={addTab}>
        +
      </div>
    </div>
  )
}

export default FileNameList
