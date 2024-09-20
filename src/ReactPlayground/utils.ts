import { strFromU8, strToU8, unzlibSync, zlibSync } from 'fflate'
import { Files } from './PlaygroundContext'
import jsZip from 'jszip'
import { saveAs } from 'file-saver'

export const fileNameLanguage = (fileName: string) => {
  const ext = fileName.split('.').pop() as string

  if (['js', 'jsx'].includes(ext)) {
    return 'javascript'
  } else if (['ts', 'tsx'].includes(ext)) {
    return 'typescript'
  } else if (['css'].includes(ext)) {
    return 'css'
  } else if (['json'].includes(ext)) {
    return 'json'
  }

  return 'javascript'
}

export function compress(data: string): string {
  const buffer = strToU8(data)
  const zipped = zlibSync(buffer, { level: 9 })
  const str = strFromU8(zipped, true)
  return btoa(str)
}

export function uncompress(base64: string): string {
  const binary = atob(base64)

  const buffer = strToU8(binary, true)
  const unzipped = unzlibSync(buffer)
  return strFromU8(unzipped)
}

export async function downloadFiles(files: Files) {
  const zip = new jsZip()

  Object.keys(files).forEach((fileName) => {
    zip.file(fileName, files[fileName].value)
  })

  const blob = await zip.generateAsync({ type: 'blob' })
  saveAs(blob, `code_${Date.now().toString().slice(-6)}.zip`)
}
