import type { MenuProps } from 'antd'
import { Avatar, Dropdown } from 'antd'
import { Link } from 'react-router-dom'

import styles from './AccountDropdown.module.scss'

const items: MenuProps['items'] = [
  {
    label: <Link to='https://www.antgroup.com'>Thông tin tài khoản</Link>,
    key: '0'
  },
  {
    label: <Link to='https://www.aliyun.com'>Đăng xuất</Link>,
    key: '2'
  }
]

const AccountDropdown = () => (
  <Dropdown menu={{ items }} trigger={['click']} placement='bottomRight'>
    <a onClick={(e) => e.preventDefault()}>
      <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }} className={styles.avatar}>
        T
      </Avatar>
    </a>
  </Dropdown>
)

export default AccountDropdown
