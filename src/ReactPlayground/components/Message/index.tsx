import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

interface Props {
  type: 'warning' | 'error'
  content: string
}

function Message({ type, content }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!!content)
  }, [content])

  return visible ? (
    <div className={classnames(styles.msg, styles[type])}>
      <pre dangerouslySetInnerHTML={{ __html: content }}></pre>
      <button className={styles.dismiss} onClick={() => setVisible(false)}>
        ✕
      </button>
    </div>
  ) : null
}

export default Message
