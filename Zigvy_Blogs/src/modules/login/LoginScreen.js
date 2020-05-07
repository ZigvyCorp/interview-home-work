import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Button from '@ant-design/react-native/lib/button';

export default class LoginScreen extends Component {
    onLoginPress = () => {
        this.props.navigation.navigate("LoadingScreen");
    }

    onSignupPress = () => {
        this.props.navigation.navigate("SignUpScreen");
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }} onPress={this.onLoginPress}>Login screen</Text>
                <Button style={{ marginTop: 10 }} onPress={this.onSignupPress}>Sign up</Button>
            </View>
        );
    }
}