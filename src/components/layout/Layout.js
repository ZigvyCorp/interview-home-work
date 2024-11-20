import React from 'react';
import { Fragment } from 'react';
import scss from './Layout.module.scss';
import Header from './Header/Header';

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={scss.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
