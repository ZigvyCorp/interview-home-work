import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getPosts, getUsers } from './actions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Post } from './Components/Post';
import { Page } from './Components/Page';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
    
  }, []);

  

  return (
    
    <>
    <Router>
      <Switch>
          <Route path="/detail/:id">
           <Post/>
          </Route>
          <Route exact path="/">
            <Page />
          </Route>
          <Route exact path="/page/:num">
            <Page />
          </Route>
        </Switch>
    </Router>
    
    </>
  );
}

export default App;
