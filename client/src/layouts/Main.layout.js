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

import {history} from "../helpers/history.helpers"


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
    <Redirect from="/" to="/home" />
  </Switch>
);

/*

    <Route path={"/admin/changeviews"} component={ChangeView} />
    <Redirect from="/admin" to="/admin/dashboard" />

*/

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick()
  {
    window.location.href = '/home'
  }

  render() {
    //const { classes, ...rest } = this.props;
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

// Dashboard.propTypes = {
//   classes: PropTypes.object.isRequired
// };

function mapStatetoProps(state)
{
  return {state};
}

export default withRouter(connect(mapStatetoProps)(Home));
