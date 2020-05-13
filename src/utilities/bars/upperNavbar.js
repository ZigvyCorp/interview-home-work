import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOutUserAction } from "../../actions/actionCreator";
import Button from "../formComponents/button";
import _ from "lodash";

const UpperNavBar = ({ signOutUserAction, user }) => {
  console.log(user);
  return (
    <ul className="row justify-content-end bg-primary p-2 upper-navbar">
      <li className="col-1">
        <Button className="border-none" onClick={signOutUserAction}>
          {_.isEmpty(user) ? <Link to="/login">Log In</Link> : "Sign Out"}
        </Button>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  const user = _.get(state, "user.response.data");
  return { user };
};

const mapDispatchToProps = (dispatch) => ({
  signOutUserAction: () => dispatch(signOutUserAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpperNavBar);
