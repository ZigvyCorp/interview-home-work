import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PostList from './components/PostList';
import PublicNav from './components/PublicNav';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <div className='App'>
        <PublicNav />

        <Switch>
          <Route path='/posts/:id'>
            <PostDetail />
          </Route>
          <Route path='/'>
            <PostList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
