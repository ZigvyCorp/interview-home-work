import './styles.css'

import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { ConfigProvider, Menu } from 'antd'
const items = [
  {
    label: 'Logo',
    key: 'logo',
    icon: <MailOutlined />,
  },
  {
    label: (
      <>
        <span>Blogs</span>
        <div className='arrow-down'></div>
      </>
    ),
    key: 'home',
  },
  {
    label: 'Adam Levine',
    key: 'user',
    icon: <UserOutlined />,
  },
]

const Navbar = () => {
  const [current, setCurrent] = useState('')
  const onClick = (e) => {
    // console.log('click ', e)
    // setCurrent(e.key)
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            horizontalItemSelectedColor: '',
            horizontalItemHoverBg: '#e6e6e6',
          },
        },
      }}
    >
      <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />
    </ConfigProvider>
  )
}

export default Navbar
