import { Switch, Route } from "wouter";
import Home from "./pages/home";
import BlogDetail from "./pages/detail/[id].tsx";
import Header from "./components/layout/header";

function App() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: 1440, margin: "auto" }}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/detail/:id" component={BlogDetail} />
        </Switch>
      </div>
    </>
  );
}

export default App;
