import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllPosts from './components/pages/all-posts';
import PostDetails from './components/pages/post-details';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/all-posts' />
        </Route>
        <Route path='/all-posts' exact>
          <AllPosts />
        </Route>

        <Route path='/posts/:postId'>
          <PostDetails />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
