import Header from './components/Header';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import DetailBlog from './pages/DetailBlog';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header />
            <HomePage />
          </Route>
          <Route exact path="/chi-tiet/:id" component={DetailBlog}>
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <DetailBlog /> */}
    </div>
  );
}

export default App;
