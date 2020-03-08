import React from 'react'
import { Layout as AntLayout } from 'antd'

import Header from '../Header'
import Footer from '../Footer'

const { Content } = AntLayout

const Layout = ({ intl, children }) => {
  return (
    <AntLayout className="">
      <Header intl={intl} />
      <Content className="py-2 px-4">{children}</Content>
      <Footer />
    </AntLayout>
  )
}

export default Layout
