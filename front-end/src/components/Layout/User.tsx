import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import clsx from 'clsx'
import React from 'react'

interface IUserProps {
  className?: string
}

const User: React.FC<IUserProps> = (props) => {

    const { className } = props

  return (
    <div className={clsx('flex justify-end items-center whitespace-nowrap', className)}>
        <Avatar size={32} icon={<UserOutlined rev={undefined} />} />    
        <span className='ml-2 text-base font-semibold'>Trần Khang</span>    
    </div>
  )
}

export default User