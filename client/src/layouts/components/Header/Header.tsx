import { FileAddOutlined, HomeOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Menu } from 'antd'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import PATH from '~/constants/path'
import { AppContext } from '~/providers/AppProvider/AppProvider'
import AccountDropdown from '../AccountDropdown'
import styles from './Header.module.scss'

const items: MenuProps['items'] = [
  {
    label: <Link to={PATH.HOME}>Trang chủ</Link>,
    key: 'home',
    icon: <HomeOutlined />
  },
  {
    label: <Link to={PATH.CREATE_BLOG}>Đăng blog</Link>,
    key: 'create_blog',
    icon: <FileAddOutlined />
  }
]

const Header = () => {
  const { isAuthenticated } = useContext(AppContext)
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
        {isAuthenticated && <AccountDropdown />}
        {!isAuthenticated && (
          <Link to={PATH.LOGIN}>
            <Button type='primary'>Đăng nhập</Button>
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
