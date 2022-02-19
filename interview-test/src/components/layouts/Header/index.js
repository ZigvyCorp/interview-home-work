import { Image, Input, Layout } from 'antd';
import queryString from 'query-string';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGO_IMG, NO_AVATAR } from '../../../constants';
import styles from './header.module.less';

const { Header } = Layout;
export default function HeaderApp() {
  const navigate = useNavigate();

  const handleSearch = (keyword) => {
    navigate(`/search?${queryString.stringify({ keyword })}`);
    document.location.reload(true);
  };

  return (
    <Header className={styles.header}>
      <div className={styles.headerGroup}>
        <a href="/">
          <Image className={styles.logo} src={LOGO_IMG} preview={false} width={40} height={40} />
        </a>
      </div>
      <div className={styles.headerGroup}>
        <Input.Search placeholder="search..." onSearch={(keyword) => handleSearch(keyword)} />
      </div>
      <div className={styles.headerGroup}>
        <div className={styles.userBox}>
          <Image className={styles.avatar} src={NO_AVATAR} preview={false} width={30} height={30} />
          <span>Adam Levine</span>
        </div>
      </div>
    </Header>
  );
}
