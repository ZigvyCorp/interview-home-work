import React, { Component } from "react";
import UserService from "../../services/user.service";
import _ from 'lodash';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.loginOrRegister = this.loginOrRegister.bind(this);
    this.reset = this.reset.bind(this);
    this.changeToRegister = this.changeToRegister.bind(this);
    this.state = {
        username: "",
        password: "",
        name: "",
        birthday: "",
        isRegister: false,
    };
  }

  onChangeName(e) {
    this.setState({
        name: e.target.value
    });
  }

  onChangeBirthday(e) {
    this.setState({
        birthday: e.target.value
    });
  }

  onChangeUsername(e) {
    this.setState({
        username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
        password: e.target.value
    });
  }

  registerNewUser() {
    var data = {
        username: this.state.username,
        password: this.state.password
    };
    UserService.createNewUser(data).then(() => {
        alert('New user has been registered');
    });
  }

  loginOrRegister() {
    const data = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      dob: this.state.birthday,
    };
    if (this.state.isRegister) {
        UserService.createNewUser(data).then(() => {
            alert('New user has been registered');
            this.reset();
        }).catch(e => {
            console.log(e);
        });
    } else {
        UserService.login(data).then(res => {
            if (!_.isEmpty(res.data.data)) {
                localStorage.setItem('userId', res.data.data.id);
                localStorage.setItem('userName', res.data.data.name);
                alert('Login successful');
                this.reset();
                this.props.history.push('/home');
                window.location.reload();
            } else {
                alert('Not found user match');
            }
        }).catch(e => {
            console.log(e);
        });
    }
    
  }

  reset() {
    this.setState({
      username: "",
      password: "",
      name: "",
      birthday: "",
      isRegister: false,
    });
  }

  changeToRegister() {
    this.setState({
        username: "",
        password: "",
        isRegister: true,
    });
  }

  render() {
    return (
      <div className="submit-form">
        <div>
            <div className="row">
                <div className="col-md-12">
                    { 
                        this.state.isRegister ? <div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={this.state.name}
                                onChange={this.onChangeName}
                                name="name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="birthday">Birthday</label>
                                <input
                                type="text"
                                className="form-control"
                                id="birthday"
                                required
                                value={this.state.birthday}
                                onChange={this.onChangeBirthday}
                                name="birthday"
                                />
                            </div>
                        </div> : null
                    }
                    
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                        type="text"
                        className="form-control"
                        id="username"
                        required
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        name="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        name="password"
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <button onClick={this.loginOrRegister} className="btn btn-success">Submit</button>
                </div>
                {
                    !this.state.isRegister ? <div>
                        <div className="col-md-6">
                            <button onClick={this.changeToRegister} className="btn btn-primary">Register</button>
                        </div>
                    </div> : null
                }
            </div>
        </div>
      </div>
    );
  }
}