import "./index.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
export default class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  signIn = () => {
  };

  render() {
    return (
      <div>
        <div className="sign">
          <div className="sign-box">
            <div className="title">Please Sign in </div>
            <div className="email">
              <input
                placeholder="Email address"
                onChange={this.handleEmail}
              ></input>
            </div>
            <div className="pass">
              <input
                className="pass"
                placeholder="Password"
                onChange={this.handlePassword}
              ></input>
            </div>
            <div className="sign-button">
              <Button className="sign-button" type="primary" onClick={this.signIn}>
                <Link to="/">Sign in</Link>
              </Button>
            </div>

            <div className="signup"><Link to="/signup">Sign up</Link></div>
          </div>
        </div>
      </div>
    );
  }
}
