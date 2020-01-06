import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Home = props => <h1> Hello World- from{props.socketClient}  </h1>;

const mapStateToProps = state => {
  return {
    socketClient: state.home.socketClient
  };
};

export default withRouter(connect(mapStateToProps)(Home));
