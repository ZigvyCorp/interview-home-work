import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../modules/login/LoginScreen';
import SignupScreen from '../modules/login/SignupScreen';

const LoginStack = createStackNavigator();

function LoginNavigator() {
    return(
        <LoginStack.Navigator initialRouteName="LoginScreen" headerMode="none">
            <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
            <LoginStack.Screen name="SignUpScreen" component={SignupScreen} />
        </LoginStack.Navigator>
    )
}

export default LoginNavigator