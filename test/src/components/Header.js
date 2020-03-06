import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import HomePage from './homePage';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            redirect: false
        }
    }
    componentDidMount() {
        const userLogin = JSON.parse(localStorage.getItem('user'));
        this.setState({
            user: userLogin
        })
    }

    renderbutton = () => {
        return (
            <div>
                <Link className="navbar-brand" to="register">
                    <button className="btn btn-danger">register</button>
                </Link>
                <Link className="navbar-brand" to="login">
                    <button className="btn btn-success">Login</button>
                </Link>
            </div>
        )
    }

    handleLogout = () => {
        JSON.parse(localStorage.removeItem('user'));
        this.setState({
            user: '',
            redirect: true
        })
    }

    redirectHome = () => {
        if (this.state.redirect === true) {
            return (
                <Redirect to={HomePage} />
            )
        }
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" href="#" to="/">
                    Blogs
                </Link>
                {this.state.user === null ?
                    this.renderbutton() :
                    <div className="dropdown">
                        <button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="./assets/default.jpg" className="imageDefault mr-2" />
                            {this.state.user !== null ? this.state.user.name : ''}
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="detail">View Profile</Link>
                            <Link className="dropdown-item" to="addPost">Add Post</Link>
                            <button className="dropdown-item" onClick={this.handleLogout} >Logout</button>
                        </div>
                    </div>}
            </nav>
        )
    }
}

export default Header;