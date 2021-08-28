import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Homepage from 'modules/Homepage'
import PostDetail from 'modules/PostDetail'

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/post" component={PostDetail} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routes;