import { createContext, PropsWithChildren, useState } from 'react'
import { fileNameLanguage } from './utils'
import {
  APP_COMPONENT_FILE_NAME,
  APP_CSS_FILE_NAME,
  IMPORT_MAP_FILE_NAME,
  ENTRY_FILE_NAME,
} from './consts'
import AppTsxRaw from './template/App.tsx?raw'
import AppCssRaw from './template/App.css?raw'
import MainTsxRaw from './template/main.tsx?raw'
import ImportMapJson from './template/import-map.json?raw'

export interface File {
  name: string
  value: string
  language: string
}

export interface Files {
  [key: string]: File
}

export interface PlaygroundContext {
  files: Files
  selectedFileName: string
  setSelectedFileName: (fileName: string) => void
  setFiles: (files: Files) => void
  addFile: (fileName: string) => void
  removeFile: (fileName: string) => void
  updateFileName: (oldFieldName: string, newFieldName: string) => void
}

export const PlaygroundContext = createContext<PlaygroundContext>({
  selectedFileName: 'App.tsx',
} as PlaygroundContext)

export const PlaygroundProvider = ({ children }: PropsWithChildren) => {
  const [files, setFiles] = useState<Files>({
    [APP_COMPONENT_FILE_NAME]: {
      language: fileNameLanguage(APP_COMPONENT_FILE_NAME),
      name: APP_COMPONENT_FILE_NAME,
      value: AppTsxRaw,
    },
    [APP_CSS_FILE_NAME]: {
      language: fileNameLanguage(APP_CSS_FILE_NAME),
      name: APP_CSS_FILE_NAME,
      value: AppCssRaw,
    },
    [ENTRY_FILE_NAME]: {
      language: fileNameLanguage(ENTRY_FILE_NAME),
      name: ENTRY_FILE_NAME,
      value: MainTsxRaw,
    },
    [IMPORT_MAP_FILE_NAME]: {
      language: fileNameLanguage(IMPORT_MAP_FILE_NAME),
      name: IMPORT_MAP_FILE_NAME,
      value: ImportMapJson,
    },
  })
  const [selectedFileName, setSelectedFileName] = useState<string>('App.tsx')

  const addFile = (fileName: string) => {
    const language = fileNameLanguage(fileName)
    setFiles({
      ...files,
      [fileName]: {
        language,
        value: '',
        name: fileName,
      },
    })
  }

  const removeFile = (fileName: string) => {
    const { [fileName]: _, ...rest } = files

    if (selectedFileName === fileName) {
      setSelectedFileName(Object.keys(files)[0])
    }

    setFiles(rest)
  }

  const updateFileName = (oldFieldName: string, newFieldName: string) => {
    if (
      !files[oldFieldName] ||
      newFieldName === undefined ||
      newFieldName === null ||
      newFieldName === oldFieldName
    )
      return

    const { [oldFieldName]: value, ...rest } = files

    const newFile = {
      [newFieldName]: {
        ...value,
        name: newFieldName,
        language: fileNameLanguage(newFieldName),
      },
    }

    if (selectedFileName === oldFieldName) {
      setSelectedFileName(newFieldName)
    }

    setFiles({
      ...rest,
      ...newFile,
    })
  }

  return (
    <PlaygroundContext.Provider
      value={{
        files,
        selectedFileName,
        setSelectedFileName,
        setFiles,
        addFile,
        removeFile,
        updateFileName,
      }}
    >
      {children}
    </PlaygroundContext.Provider>
  )
}
