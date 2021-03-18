import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { NotFoundPage } from '../components';
import { HomePage, PostDetailPage } from '../containers';

const Routes = () => (
  <Switch>
    <Route path='/' exact>
      <HomePage />
    </Route>
    <Route path='/detail/:id'>
      <PostDetailPage />
    </Route>
    <Route path='*' exact>
      <NotFoundPage />
    </Route>
  </Switch>
);

export default Routes;