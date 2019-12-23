import React from 'react';
import * as types from '../../redux/actions/actionTypes'
import { connect } from 'react-redux';
import axios from 'axios';
import jwt from 'jsonwebtoken';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const { loginSuccess, loginFail } = this.props;
        const endpoint = 'http://localhost:8080/api/sessions/login';
        const userData = this.state;
        axios.post(endpoint, userData).then(res => {
            const token = res.data.token;
            if (token) {
                const decode = jwt.decode(token);
                loginSuccess({ user: decode.username, token: token });
                // TODO: when I press back arrow on browser, it still gets back to the login page
                this.props.history.push('/');
            } else {
                loginFail();
            }
        });
    }

    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className="row">
                <div className="card">
                    <article className="card-body">
                        <h4 className="card-title mb-4 mt-1">Sign in</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input name="" className="form-control" placeholder="username" type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" placeholder="******" type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Login </button>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    loggedIn: state.loggedIn,
    user: state.user,
    token: state.token
});

const mapDispatchToProps = dispatch => ({
    loginSuccess: userdata => dispatch({ type: types.LOGIN_SUCCESS, userdata }),
    loginFail: () => dispatch({ type: types.LOGIN_FAILURE })
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);