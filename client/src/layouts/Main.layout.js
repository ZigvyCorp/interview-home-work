/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

import { Layout } from 'antd';

import UserHeader from '../components/Header/UserHeader';
const { Header, Footer, Content } = Layout;

import routes from "../router";

import '../App.css';

import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import LoginForm from "../views/LoginPage.views"
import RegisterForm from "../views/RegisterPage.views"
import PostCreate from "../views/PostCreate.view"

import {PrivateRoute, PrivateNotTokenRoute} from "../components/Route/PrivateRoute";



const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/" && !prop.invisible) {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
    })}
    {/* ignore access to login,register if already logged in */}
    <PrivateRoute path="/login" component={LoginForm} />
    <PrivateRoute path="/register" component={RegisterForm} />

    {/* if already logged in will access this page */}
    <PrivateNotTokenRoute path="/create-post" component={PostCreate} />
    
    <Redirect from="/" to="/home" />
  </Switch>
);


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick()
  {
    window.location.href = '/home'
  }

  render() {
    return (
        <>
        <Layout>
            <Header>
                <div className="logo" onClick={this.handleClick.bind(this)}></div>
                <UserHeader />
            </Header>
            <Content>{switchRoutes}</Content>
            <Footer style={{textAlign: 'center'}}>@Copyright by Tran Duong Minh Hai</Footer>
    </Layout>
        </>
    );
  }
}

function mapStatetoProps(state)
{
  return {state};
}

export default withRouter(connect(mapStatetoProps)(Home));
