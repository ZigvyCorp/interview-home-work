import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import Blogs from '../src/blogs';

import AllPosts from '../src/components/allPosts';
import PostById from '../src/components/postById';
import 'bootstrap/dist/css/bootstrap.min.css';



// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/blogs' component={AllPosts}/>
    </Switch>
  </main>
)

export default Main;