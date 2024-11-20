import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.introduce}>
        Built by antd. The source code is available on{' '}
        <a
          href='https://github.com/haitrieu1811/Tran_Hai_Trieu_2023/tree/Tran_Hai_Trieu_2023'
          target='_blank'
          className={styles.github}
        >
          GitHub
        </a>
        .
      </div>
    </footer>
  )
}

export default Footer
