import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { fileNameLanguage, compress, uncompress } from './utils'
import { initFiles } from './files'

export interface File {
  name: string
  value: string
  language: string
}

export interface Files {
  [key: string]: File
}

type Theme = 'light' | 'dark'

export interface PlaygroundContext {
  files: Files
  selectedFileName: string
  theme: Theme
  setTheme: (theme: Theme) => void
  setSelectedFileName: (fileName: string) => void
  setFiles: (files: Files) => void
  addFile: (fileName: string) => void
  removeFile: (fileName: string) => void
  updateFileName: (oldFieldName: string, newFieldName: string) => void
}

export const PlaygroundContext = createContext<PlaygroundContext>({
  selectedFileName: 'App.tsx',
} as PlaygroundContext)

const getFilesFromUrl = () => {
  let files: Files | undefined
  try {
    const hash = window.location.hash.slice(1)
    files = JSON.parse(uncompress(hash))
  } catch (error) {
    console.error(error)
  }

  return files
}

export const PlaygroundProvider = ({ children }: PropsWithChildren) => {
  const [files, setFiles] = useState<Files>(getFilesFromUrl() || initFiles)
  const [selectedFileName, setSelectedFileName] = useState<string>('App.tsx')
  const [theme, setTheme] = useState<Theme>('light')

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

  useEffect(() => {
    const hash = compress(JSON.stringify(files))
    window.location.hash = hash
  }, [files])

  return (
    <PlaygroundContext.Provider
      value={{
        files,
        selectedFileName,
        theme,
        setTheme,
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
