import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Interview/Header';

export default function InterViewHomeTemplate(props) {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header />
            <Component />
          </Fragment>
        );
      }}
    />
  );
}
