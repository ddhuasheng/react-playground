# react-playground

### 布局

- header: 操作栏
- editor-area: 代码编辑
- preview-area: 预览

### 逻辑构思

1. 通过@monaco-editor/react 编写代码
2. 通过@babel/standalone 编译代码
3. 通过自定义 babel 插件, 修改 source 中的 path 路径, 从而使每个 import 的语句找到正确的文件
4. 通过 URL.createObjectURL 将编译后的代码转为 blobURl
5. 通过 iframe.src 引入, 实现预览

### 技术栈

1. react
2. react-dom
3. allotment (布局组件 js 库)

```jsx
import { Allotment } from 'allotment'

function App() {
  return (
    <div>
      <Allotment defaultSizes={[200, 200]}>
        <Allotment.Pane minSize={100} defaultSize={200}>
          <div>Pane 1</div>
        </Allotment.Pane>
        <Allotment.Pane minSize={100} defaultSize={200}>
          <div>Pane 2</div>
        </Allotment.Pane>
      </Allotment>
    </div>
  )
}
```

4. antd
5. classnames
6. loadsh
7. copy-to-clipboard

```ts
import copy form 'copy-to-clipboard'
copy('hello world')
```

8. fflate (压缩与解压字符串)

```ts
import { zlibSync, unzlibSync, strToU8, strFromU8 } from 'fflate'

function compress(data: string): string {
  // 将字符串转为 Uint8Array
  const buffer = strToU8(data)
  // 使用 zlibSync 进行压缩
  const zipped = zlibSync(buffer, { level: 9 })
  // 将 Uint8Array 转为 字符串
  const str = strFromU8(zipped, true)
  // 将字符串转为 base64
  return btoa(str)
}

function uncompress(base64: string): string {
  // 将 base64 转为字符串
  const binary = atob(base64)

  // 将字符串转为 Uint8Array
  const buffer = strToU8(binary, true)
  // 使用 unzlibSync 进行解压
  const unzipped = unzlibSync(buffer)
  // 将 Uint8Array 转为 字符串
  return strFromU8(unzipped)
}
```

9. jszip (压缩与解压 zip)

```ts
import JSZip from 'jszip'

async function compress(files: File[]): Promise<string> {
  const zip = new JSZip()
  for (const file of files) {
    const blob = await file.arrayBuffer()
    zip.file(file.name, blob)
  }
  const content = await zip.generateAsync({ type: 'blob' })
  return content
}
```

10. file-saver (下载文件)

```ts
import { saveAs } from 'file-saver'

const file = new File(['hello world'], 'hello.txt', {
  type: 'text/plain;charset=utf-8',
})
saveAs(file)
```

11. @babel/standalone (babel 编译器)

```ts
import { transform } from '@babel/standalone'

const code = `
  function hello() {
    console.log('hello world')
  }
`

const result = transform(code, {
  presets: ['@babel/preset-env'],
})
console.log(result.code)
```

12. @typescript/ata (typescript 自动导包)

13. @monaco-editor/react (monaco 编辑器)
