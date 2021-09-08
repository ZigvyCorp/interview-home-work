import './App.css';
import Home from "./pages/Home/Home";
import BlogDetail from './pages/BlogDetail/BlogDetail';
import { Router, Route, Switch } from 'react-router-dom';

import {createBrowserHistory} from 'history'
export const history = createBrowserHistory()

function App() {
  return (

    <Router history={history}>
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/post/:id' exact component={BlogDetail}/>
        <Route path='/' exact component={Home} />
        <Route path='' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
