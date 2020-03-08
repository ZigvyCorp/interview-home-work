import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { injectIntl } from 'react-intl'

import HomePage from './containers/Home/Loadable'
import PostPage from './containers/Post/Loadable'
import Layout from './components/Layout'

import logo from './logo.svg'
import './App.css'

const App = ({ intl }) => {
  return (
    <>
      <Helmet titleTemplate="%s - Blog" defaultTitle="Dong">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Layout intl={intl}>
        <Switch>
          {/* <Route exact path="/signin" name="Signin Page" render={props => <Signin {...props} />} />
        <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
        <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} /> */}
          <Route path="/" component={HomePage} />
          <Route path="/posts/:postId" component={PostPage} />
        </Switch>
      </Layout>
    </>
  )
}

export default injectIntl(App)
