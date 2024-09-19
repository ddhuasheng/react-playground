import LogoSvg from './icons'
import styles from './index.module.scss'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <LogoSvg />
        <span>React Playground</span>
      </div>
    </div>
  )
}

export default Header
