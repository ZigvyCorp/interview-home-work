import React, { Component } from "react";
import UserService from "../../services/user.service";
import _ from 'lodash';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.updateUserProfile = this.updateUserProfile.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
        username: "",
        password: "",
        name: "",
        birthday: "",
        isRegister: false,
    };
  }

  componentDidMount() {
    const userId = localStorage.getItem('userId');
    UserService.loadUserDetail(userId).then((result) => {
        const detail = result.data.data;
        this.setState({
            username: detail.username,
            password: detail.password,
            name: detail.name,
            birthday: detail.dob,
        });
    })
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

  updateUserProfile() {
    const data = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      dob: this.state.birthday,
    };
    UserService.updateUserProfile(localStorage.getItem('userId'), data).then(res => {
      alert('Update user profile successful');
      console.log(res);
    }).catch(e => {
        console.log(e);
    });
  }

  logout() {
    localStorage.setItem('userId', '');
    localStorage.setItem('userName', '');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="submit-form">
        <div>
            <div className="row">
                <div className="col-md-12">
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
                  <button onClick={this.updateUserProfile} className="btn btn-success">Update</button>
                </div>
                <div className="col-md-6">
                  <button onClick={this.logout} className="btn btn-primary">Log Out</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}