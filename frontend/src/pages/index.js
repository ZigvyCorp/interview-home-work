import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './style.css'

import routes from '../configs/routes';


function Main() {
  return (
    <Router>
      <Routes>
        {routes.map(item => <Route exact={item.exact} path={item.path} element={item.component} />)}
      </Routes>
    </Router>
  );
}

export default Main;
