import React from "react";
import { Link } from "react-router-dom";

// import axios from "axios";
// import agent from "../../agent";
// import { LOGIN, UPDATE_FIELD_AUTH } from "../../constants/actionTypes";
import { connect } from "react-redux";

// const mapStateToProps = state => ({ ...state.auth });

// const mapDispatchToProps = dispatch => ({
//   onChangeEmail: value =>
//     dispatch({ type: UPDATE_FIELD_AUTH, key: "email", value }),
//   onChangePassword: value =>
//     dispatch({ type: UPDATE_FIELD_AUTH, key: "password", value }),
//   onSubmit: (email, password) =>
//     dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) })
// });

class Login extends React.Component {
  //   constructor() {
  //     super();
  //     this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
  //     this.changePassword = ev => this.props.onChangePassword(ev.target.value);
  //     this.submitForm = (email, password) => ev => {
  //       ev.preventDefault();
  //       this.props.onSubmit(email, password);
  //     };
  //   }

  render() {
    const email = this.props.email;
    const password = this.props.password;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>

              {/* <form onSubmit={this.submitForm(email, password)}> */}
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      id="email"
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Email"
                      value={email}
                      //   onChange={this.changeEmail}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      //   onChange={this.changePassword}
                      id="password"
                    />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                  >
                    Sign in
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
// export default connect(mapStateToProps, mapDispatchToProps)(Login);
