import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { registerUserAction } from '../actions/actionCreators';
import Footer from './Footer';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            redirect: false,
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

    onHandleRegister = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let name = e.target.name.value;
        let password = e.target.password.value;

        const user = {
            email, name, password
        };
        localStorage.setItem('user', JSON.stringify(user));
        this.setState({ redirect: !this.state.redirect })
        // this.props.registerUserAction(data);
    }

    renderRedirect = () => {
        if (this.state.redirect === true) {
            return <Redirect to="/" />
        }
    }

    render() {
        return (
            <div className="container">
                <Header />
                <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Register</h3>
                <form onSubmit={this.onHandleRegister}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" id="email" className="form-control" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputName1">Full Name</label>
                        <input type="text" id="name" name="name" className="form-control" />
                        <small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" id="password" name="password" className="form-control" />
                    </div>
                    {this.state.localStorage === false ? <button type="submit" className="btn btn-primary">Register</button> : <button type="submit" disabled className="btn btn-primary">Register</button>}
                </form>
                {this.renderRedirect()}
                Do you have account? <Link to='login'>Login here</Link>
                <Footer />
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         registerUserAction
//     }, dispatch)
// }

// export default connect(null, mapDispatchToProps)(RegisterPage); 
export default RegisterPage;