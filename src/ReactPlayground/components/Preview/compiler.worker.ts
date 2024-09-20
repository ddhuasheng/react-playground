import { transform } from '@babel/standalone'
import { File, Files } from '../../PlaygroundContext'
import { ENTRY_FILE_NAME } from '../../consts'
import { PluginObj } from '@babel/core'

export const beforeTransformCode = (filename: string, code: string) => {
  let _code = code
  const regexReact = /import\s+React/g
  if (
    (filename.endsWith('.jsx') || filename.endsWith('.tsx')) &&
    !regexReact.test(code)
  ) {
    _code = `import React from 'react';\n${code}`
  }
  return _code
}

export const babelTransform = (
  filename: string,
  code: string,
  files: Files
) => {
  const _code = beforeTransformCode(filename, code)
  let result = ''

  try {
    result = transform(_code, {
      filename,
      presets: ['react', 'typescript'],
      plugins: [customResolver(files)],
      retainLines: true,
    }).code as string
  } catch (e) {
    console.log(e)
  }
  return result
}

export const compile = (files: Files) => {
  const main = files[ENTRY_FILE_NAME]
  return babelTransform(ENTRY_FILE_NAME, main.value, files)
}

export function customResolver(files: Files): PluginObj {
  return {
    visitor: {
      ImportDeclaration(path) {
        const module = path.node.source.value
        if (module.startsWith('.')) {
          const file = getModuleFile(files, module)

          if (!file) return

          if (file.name.endsWith('.css')) {
            path.node.source.value = CssJs(file)
          } else if (file.name.endsWith('.json')) {
            path.node.source.value = JsonJs(file)
          } else {
            path.node.source.value = URL.createObjectURL(
              new Blob([babelTransform(file.name, file.value, files)], {
                type: 'application/javascript',
              })
            )
          }
        }
      },
    },
  }
}

const getModuleFile = (files: Files, module: string) => {
  let moduleName = module.split('./').pop() as string

  if (moduleName.includes('.')) {
    const realModuleName = Object.keys(files)
      .filter((key) => {
        return (
          key.endsWith('.js') ||
          key.endsWith('.ts') ||
          key.endsWith('.tsx') ||
          key.endsWith('.jsx')
        )
      })
      .find((key) => key.split('.').includes(moduleName))

    if (realModuleName) {
      moduleName = realModuleName
    }
  }

  return files[moduleName]
}

const JsonJs = (file: File) => {
  const content = `export default ${file.value}`
  return URL.createObjectURL(
    new Blob([content], { type: 'application/javascript' })
  )
}

const CssJs = (file: File) => {
  const randowId = Date.now()
  const content = `
(() => {
  const stylesheet = document.createElement('style');
  stylesheet.id = 'style_${randowId}_${file.name}';
  document.head.appendChild(stylesheet);

  const styles = document.createTextNode(\`${file.value}\`);
  stylesheet.innerHTML = ''; 
  stylesheet.appendChild(styles)
})()
  `
  return URL.createObjectURL(
    new Blob([content], { type: 'application/javascript' })
  )
}

self.addEventListener('message', ({ data }) => {
  if (data.type === 'COMPILE') {
    try {
      self.postMessage({
        type: 'COMPILED_CODE',
        data: compile(data.data),
      })
    } catch (e) {
      self.postMessage({
        type: 'error',
        data: e,
      })
    }
  }
})
