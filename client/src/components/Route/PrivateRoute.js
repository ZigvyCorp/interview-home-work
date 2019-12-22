import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

axios.interceptors.response.use((res) => {
    return res;
}, (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        window.location.href = "/home";
    }
});

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token')
        ? <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
        : <Component {...props} />
    )}
    />)

export const PrivateNotTokenRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
    (typeof localStorage.getItem('token') !== 'undefined' && !localStorage.getItem('token'))
        ? <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
        : <Component {...props} />
    )}
    />)
