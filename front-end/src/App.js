
import './App.css';
import Header from "./header/header";
import List from './components/list/list'
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Container className="antiwhite">post</Container> */}
      <Router history={createBrowserHistory()}>
        <Route path="/" component={List}>
        </Route>
      </Router>
    </div>
  );
}

export default App;
