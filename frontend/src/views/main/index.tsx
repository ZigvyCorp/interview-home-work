import { useAuth } from "@/HOCs/auth-provider";
import { MainLayout } from "@/layouts/main/MainLayout";
import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

const Blogs = React.lazy(() => import("./blogs"));

const MainModule = () => {
  const { isAuthenticated, loading } = useAuth();
  const history = useHistory();
  useEffect(() => {
    if (!loading && isAuthenticated === false) {
      history.push("/auth/login");
    }
  }, [isAuthenticated, loading]);
  return (
    <MainLayout>
      <Switch>
        <Route path="/blogs" component={Blogs} />
        <Route path="/" component={Blogs} />
      </Switch>
    </MainLayout>
  );
};

export default MainModule;
