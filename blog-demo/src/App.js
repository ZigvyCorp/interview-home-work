import "./App.css";
import { Router, Switch } from "react-router-dom";
import Home from "./pages/HomPages";
import { createBrowserHistory } from "history";
import Details from "./components/Details";
import Loading from "./components/Loading";
import HomeTeamplate from "./templates/HomeTeamplate";
import Login from "./components/Login";
import AdminTemplate from "./templates/AdminTemplate";
export const history = createBrowserHistory();

function App() {
  return (
    <>
      <Loading />
      <Router history={history}>
        <Switch>
          <AdminTemplate exact path="/login" Component={Login} />
          <HomeTeamplate exact path="/detail/:id" Component={Details} />

          <HomeTeamplate exact path="/" Component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
