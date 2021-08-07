import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import { BackTop } from "antd";
import Navigation from "./components/Navigation";

const style = {
  height: 50,
  width: 50,
  lineHeight: "50px",
  borderRadius: 4,
  backgroundColor: " var(--co-main)",
  color: "#fff",
  textAlign: "center",
  fontSize: 15,
  fontWeight: 600
};

function App() {
  return (
    <div className="page">
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
      <Navigation/>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/posts/:_id" component={PostDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
