import { Spin } from "antd";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import { AuthLayout } from "../../layouts/auth/AuthLayout";

const Login = React.lazy(() => import("./login"));
const SignUp = React.lazy(() => import("./sign-up"));

const AuthModule = () => {
  return (
    <AuthLayout>
      <Suspense fallback={<Spin />}>
        <Switch>
          <Route path="/auth/signup" component={SignUp} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth" component={Login} />
        </Switch>
      </Suspense>
    </AuthLayout>
  );
};

export default AuthModule;
