import "./index.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default class Signup extends Component {
  state = {
    name:"",
    email: "",
    password: ""
  };

  handleName = e =>{
      this.setState({name: e.target.value})
  }

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
            <div className="title">Please Sign up </div>
            <div className="email">
              <input
                placeholder="Your name"
                onChange={this.handleName}
              ></input>
            </div>
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
                <Link to="/">Sign up</Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
