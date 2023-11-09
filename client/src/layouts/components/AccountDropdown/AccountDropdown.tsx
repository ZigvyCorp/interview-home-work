import { useMutation } from '@tanstack/react-query'
import type { MenuProps } from 'antd'
import { Avatar, Dropdown } from 'antd'
import { useCallback, useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'

import userApi from '~/api/users.api'
import { AppContext } from '~/providers/AppProvider/AppProvider'
import styles from './AccountDropdown.module.scss'

const AccountDropdown = () => {
  const { resetAuth } = useContext(AppContext)

  // Mutation: Đăng xuất
  const logoutMutation = useMutation({
    mutationFn: userApi.logout,
    onSuccess: () => {
      resetAuth()
    }
  })

  // Đăng xuất
  const logout = useCallback(() => {
    logoutMutation.mutate()
  }, [logoutMutation])

  const items: MenuProps['items'] = useMemo(
    () => [
      {
        label: <Link to='https://www.antgroup.com'>Thông tin tài khoản</Link>,
        key: '0'
      },
      {
        label: <div onClick={logout}>Đăng xuất</div>,
        key: '2'
      }
    ],
    [logout]
  )

  return (
    <Dropdown menu={{ items }} trigger={['click']} placement='bottomRight'>
      <a onClick={(e) => e.preventDefault()}>
        <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }} className={styles.avatar}>
          T
        </Avatar>
      </a>
    </Dropdown>
  )
}

export default AccountDropdown
