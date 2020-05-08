import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    Image,
    TextInput
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import Button from '@ant-design/react-native/lib/button';

import { LoginStyle } from '../../styles/LoginComponentStyles'
import {
    UserIcon,
    LockIcon
} from '../../resources/VectorIcons'


export default class LoginScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            password: "",
            loggingIn: false
        }
    }

    onLoginPress = () => {
        if (this.state.userName.trim().length > 0 && this.state.password.trim().length > 0) {
            this.props.navigation.navigate("LoadingScreen");
        } else {
            alert('Username and password must not empty..!!!')
        }
    }

    onSignupPress = () => {
        this.props.navigation.navigate("SignUpScreen");
    }

    render() {
        return (
            <View style={LoginStyle.loginScreenContainer}>
                <ImageBackground
                    source={require("../../resources/images/background.png")}
                    style={LoginStyle.backgroundContainer}
                    imageStyle={LoginStyle.backgroundImg}
                >
                    <ScrollView style={LoginStyle.ScrollViewContainer}>
                        <View style={LoginStyle.logoContainer}>
                            <View style={LoginStyle.logoWrapper}>
                                <Image
                                    source={require('../../resources/images/blog_logo_2.png')}
                                    style={LoginStyle.logo}
                                />
                            </View>
                        </View>
                        <View style={LoginStyle.loginSectionContainer} >
                            <View style={LoginStyle.loginFormContainer}>

                                <View style={LoginStyle.loginFormWrapper}>
                                    <View style={LoginStyle.inputHolder}>
                                        <View style={LoginStyle.inputWrapper}>
                                            <View style={LoginStyle.iconWrapper} >
                                                <UserIcon size={hp('6%')} color="#DBD9D9" />
                                            </View>
                                            <View
                                                style={LoginStyle.inputContainer}
                                            >
                                                <TextInput
                                                    style={LoginStyle.input}
                                                    placeholder="Username"
                                                    placeholderTextColor='#BDBDBD'
                                                    onChangeText={(username) => {
                                                        this.setState({ userName: username })
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={LoginStyle.inputWrapper}>
                                            <View style={LoginStyle.iconWrapper}>
                                                <LockIcon size={hp('6%')} color="#DBD9D9" />
                                            </View>
                                            <View style={LoginStyle.inputContainer}>
                                                <TextInput
                                                    style={LoginStyle.input}
                                                    placeholder="Password"
                                                    placeholderTextColor='#BDBDBD'
                                                    secureTextEntry={true}
                                                    onChangeText={(pwd) => {
                                                        this.setState({ password: pwd })
                                                    }}
                                                />
                                            </View>
                                        </View>

                                    </View>
                                </View>

                                {/* button */}
                                <View style={LoginStyle.buttonContainer}>
                                    <Button
                                        style={{
                                            width: wp('77%'),
                                            marginBottom: hp('2%'),
                                            backgroundColor: '#8E8989',
                                            borderColor: '#888181'
                                        }}
                                        activeStyle={{ backgroundColor: '#8E8989' }}
                                        onPress={this.onLoginPress}
                                    >
                                        <Text style={{ color: 'white', fontWeight: '600' }}>
                                            LOGIN
                                        </Text>
                                    </Button>
                                    <Button
                                        style={{
                                            width: wp('77%'),
                                            marginBottom: hp('2%'),
                                            backgroundColor: '#7B7A7A',
                                            borderColor: '#5F5C5C'
                                        }}
                                        activeStyle={{ backgroundColor: '#7B7A7A' }}
                                        onPress={this.onSignupPress}
                                    >
                                        <Text style={{ color: 'white', fontWeight: '600' }}>
                                            SIGN UP
                                        </Text>
                                    </Button>
                                </View>
                            </View>
                            <View style={{ flex: 1 }}>

                            </View>
                        </View>
                    </ScrollView>

                </ImageBackground>
            </View>
        );
    }
}