import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

axios.interceptors.response.use((res) => {
    return res;
}, (error) => {
    if (error.response.status === 403) {
        localStorage.removeItem('token');
        window.location.href = "/home";
    }
});

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
    )}
    />)
