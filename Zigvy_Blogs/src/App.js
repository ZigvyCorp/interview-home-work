import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './navigation/Routes';
import { Provider } from 'react-redux';

import Store from './redux/Store'


export default class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <NavigationContainer>
                    <Routes />
                </NavigationContainer>
            </Provider>
        );
    }
}