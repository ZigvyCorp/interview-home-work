import PropTypes from 'prop-types'
import { Fragment, ReactNode } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from './MainLayout.module.scss'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </Fragment>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout
