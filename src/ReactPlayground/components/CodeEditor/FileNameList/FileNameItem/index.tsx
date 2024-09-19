import { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import styles from '../index.module.scss'

interface Props {
  value: string
  actived: boolean
  readonly: boolean
  creating: boolean
  onClick: () => void
  onEditComplete: (name: string) => void
  onRemove: () => void
}

function FileNameItem({
  value,
  actived,
  creating,
  readonly,
  onClick,
  onEditComplete,
  onRemove,
}: Props) {
  const [name, setName] = useState(value)
  const [editing, setEditing] = useState(creating)
  const inputRef = useRef<HTMLInputElement>(null)

  const clickHandler = () => {
    if (readonly) return

    setEditing(true)
    setTimeout(() => {
      inputRef.current?.focus()
    })
  }

  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setEditing(false)
      onEditComplete(name)
    }
  }

  const blurHandler = () => {
    setEditing(false)
    onEditComplete(name)
  }

  const removeHandle = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    if (readonly) return
    onRemove()
  }

  useEffect(() => {
    if (creating) {
      setTimeout(() => {
        inputRef.current?.focus()
      })
    }
  }, [creating])

  return (
    <div
      className={classnames(
        styles['tab-item'],
        actived ? styles.actived : null
      )}
      onClick={onClick}
    >
      {editing ? (
        <input
          className={classnames(styles['tabs-item-input'])}
          type="text"
          ref={inputRef}
          value={name}
          onBlur={() => blurHandler()}
          onKeyDown={(e) => keyDown(e)}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <>
          <span onDoubleClick={() => clickHandler()}>{name}</span>
          {!readonly && (
            <span
              style={{ marginLeft: 5, display: 'flex' }}
              onClick={(e) => removeHandle(e)}
            >
              <svg width="12" height="12" viewBox="0 0 24 24">
                <line stroke="#999" x1="18" y1="6" x2="6" y2="18"></line>
                <line stroke="#999" x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </span>
          )}
        </>
      )}
    </div>
  )
}

export default FileNameItem
