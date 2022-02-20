import React, { useState } from 'react';
const API = require('../../utils/api');

const Login = () => {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const { username, password } = loginForm;
    const onChangeLoginForm = event => 
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    const login = async event => {
        event.preventDefault()
        try {
            const loginData = await API("login", "POST", loginForm)
            console.log(loginData)
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card bg-dark text-white"
                                style={{ borderRadius: "1rem" }}
                            >
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">
                                            Please enter your login and password!
                                        </p>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="email"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                required
                                                onChange={onChangeLoginForm}
                                                value={username}
                                            />
                                            <label className="form-label" htmlFor="typeEmailX" name="username">
                                                Username
                                            </label>
                                        </div>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                id="typePasswordX"
                                                name="password"
                                                className="form-control form-control-lg"
                                                required
                                                onChange={onChangeLoginForm}
                                                value={password}
                                            />
                                            <label className="form-label" htmlFor="typePasswordX">
                                                Password
                                            </label>
                                        </div>
                                        <button
                                            className="btn btn-outline-light btn-lg px-5"
                                            type="submit"
                                            click="checkLogin"
                                        >
                                            Login
                                        </button>
                                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-facebook-f fa-lg" />
                                            </a>
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-twitter fa-lg mx-4 px-2" />
                                            </a>
                                            <a href="#!" className="text-white">
                                                <i className="fab fa-google fa-lg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Login;