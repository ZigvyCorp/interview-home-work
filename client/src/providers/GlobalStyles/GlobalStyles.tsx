import PropTypes from 'prop-types'
import { Fragment, ReactNode } from 'react'

import './GlobalStyles.scss'

const GlobalStyles = ({ children }: { children: ReactNode }) => {
  return <Fragment>{children}</Fragment>
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired
}

export default GlobalStyles
