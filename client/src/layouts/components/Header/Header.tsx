import { FileOutlined, HomeOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import PATH from '~/constants/path'
import AccountDropdown from '../AccountDropdown'
import styles from './Header.module.scss'

const items: MenuProps['items'] = [
  {
    label: <Link to={PATH.HOME}>Trang chủ</Link>,
    key: 'home',
    icon: <HomeOutlined />
  },
  {
    label: <Link to={PATH.BLOGS}>Blog</Link>,
    key: 'blog',
    icon: <FileOutlined />
  },
  {
    label: <Link to={PATH.BLOGS}>Đăng blog</Link>,
    key: 'create-blog',
    icon: <FileOutlined />
  }
]

const Header = () => {
  const [current, setCurrent] = useState('home')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <Link to={PATH.HOME} className={styles.logo}>
          Logo
        </Link>
        <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />
        <AccountDropdown />
      </nav>
    </header>
  )
}

export default Header
