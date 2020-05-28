/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import routes from "./routes/routes";
import Header from './components/header/header';
import { toast } from "react-toastify";
import { TOKEN } from "./utils/constant";
import { authorizeUser } from "./api";
import { bindActionCreators } from "redux";
import { fetchUserSuccess } from "./actions";

function ZigvyNews(props) {
  const { userState } = props;
  
  useEffect(() => {
    const authorize = async () => {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        try {
          const { data } = await authorizeUser(token);
          if (data) {
            const { name, _id } = data;
            if (!userState.isLogin && _id) {
              props.fetchUserSuccessAction(data);
              toast.success(`Hi, ${name}!`);
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
    };

    authorize();
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index.toString()}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
    postState: state.postState,
    generalState: state.generalState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserSuccessAction: bindActionCreators(fetchUserSuccess, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ZigvyNews);
