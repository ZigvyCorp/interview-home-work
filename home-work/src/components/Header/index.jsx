import React, { memo } from 'react';
import styles from './header.module.scss';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const Header = memo(() => {

  const handleClickTest = () => {
  }

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['container--logo']}>
          <Avatar shape="square" />
          <div>Logo</div>
        </div>
        <div className={styles['container--blogs']}>Blogs</div>
        <div className={styles['container--logo']}>
          <Avatar shape="square" icon={<UserOutlined />} />
          <div className="test">Adam Levine</div>
        </div>
      </div>
    </>
  )
})

export default Header