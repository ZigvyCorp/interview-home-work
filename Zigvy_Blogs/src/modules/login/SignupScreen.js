import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class SignupScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>Sign up screen</Text>
            </View>
        );
    }
}