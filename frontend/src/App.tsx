import { Spin } from "antd";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const AuthModule = React.lazy(() => import("./views/auth"));
const MainModule = React.lazy(() => import("./views/main"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin />}>
        <Switch>
          <Route path="/auth" component={AuthModule} />
          <Route path="/" component={MainModule} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
