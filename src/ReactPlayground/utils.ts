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
