import React from "react";
import {
  LogIn,
  SignUp,
  Home,
  AuhtenticationFormContainer,
} from "./components/applications-index";
import { Switch, Route, Redirect } from "react-router-dom";

const test = true;

const PrivateComponent = (Component) =>
  test ? <Redirect to="/login" /> : <Component />;

const App = () => (
  <React.Fragment>
    <Switch>
      <Route path="/(|home)" exact>
        {PrivateComponent(Home)}
      </Route>
      <Route path="/login">
        <AuhtenticationFormContainer>
          <LogIn />
        </AuhtenticationFormContainer>
      </Route>
      <Route path="/signup">
        <AuhtenticationFormContainer>
          <SignUp />
        </AuhtenticationFormContainer>
      </Route>
    </Switch>
  </React.Fragment>
);

export default App;
