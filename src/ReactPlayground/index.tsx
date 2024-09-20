import { Allotment } from 'allotment'
import 'allotment/dist/style.css'
import Header from './components/Header'
import CodeEditor from './components/CodeEditor'
import Preview from './components/Preview'
import { useContext } from 'react'
import { PlaygroundContext } from './PlaygroundContext'
import './index.scss'

function ReactPlayground() {
  const { theme } = useContext(PlaygroundContext)

  return (
    <div className={theme} style={{ height: '100vh' }}>
      <Header />
      <div style={{ height: 'calc(100vh - 50px)' }}>
        <Allotment defaultSizes={[100, 100]}>
          <Allotment.Pane minSize={0}>
            <CodeEditor />
          </Allotment.Pane>
          <Allotment.Pane minSize={0}>
            <Preview />
          </Allotment.Pane>
        </Allotment>
      </div>
    </div>
  )
}

export default ReactPlayground
