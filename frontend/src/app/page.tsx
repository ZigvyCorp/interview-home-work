import Image from 'next/image'
import styles from './page.module.css'
import ZigvyLogo from '@/public/zigvy-logo.png'
import Avatar from '@/public/avatar.png'
import Header from '@/component/Header'
import Body from '@/component/Body'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Body/>
    </main>
  )
}
