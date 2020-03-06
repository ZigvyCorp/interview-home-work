import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localStorage: false
        }
    }
    componentWillMount() {
        if (localStorage.getItem('user') !== null) {
            this.setState({ localStorage: !this.state.localStorage })
        } else {
            this.setState({ localStorage: this.state.localStorage })
        }
    }

    handleLogin = () => {

    }

    render() {
        return (
            <div className="container">
                <Header />
                <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Login</h3>
                <form onSubmit={this.handleLogin}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    {this.state.localStorage === false ? <button type="submit" className="btn btn-primary">Login</button> : <button type="submit" disabled className="btn btn-primary">Login</button>}
                </form>
                Don't have account? <Link to='register'>Register here</Link>
                <Footer />
            </div>
        )
    }
}

export default LoginPage;