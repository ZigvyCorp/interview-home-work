import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import Button from '@ant-design/react-native/lib/button';

import { LoginStyle } from '../../styles/LoginComponentStyles'
import {
    FabBackIcon
} from '../../resources/VectorIcons'

export default class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            displayName: ""
        }
    }

    onSignupAccountPress = () => {
        const { userName, password } = this.state
        if (userName.trim().length > 0 && password.trim().length > 0) {
            //Trigger signup process here
        } else {
            alert("Username and Password must not empty..!!!")
        }
    }

    onBackPress = () => {
        this.props.navigation.goBack();
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
                        <TouchableOpacity 
                            style={{ position: 'absolute', top: hp('4%'), left: wp('3%') }}
                            onPress={this.onBackPress}
                        >
                            <FabBackIcon size={hp('5%')} color="#BDBDBD"/>
                        </TouchableOpacity>
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

                                <View style={[LoginStyle.loginFormWrapper, { flex: 4 }]}>
                                    <View style={LoginStyle.inputHolder}>
                                        <View style={LoginStyle.inputWrapper}>
                                            <View
                                                style={LoginStyle.inputContainer}
                                            >
                                                <TextInput
                                                    style={LoginStyle.input}
                                                    placeholder="Enter your name"
                                                    placeholderTextColor='#BDBDBD'
                                                    onChangeText={(name) => {
                                                        this.setState({ displayName: name })
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={LoginStyle.inputWrapper}>
                                            <View style={LoginStyle.inputContainer}>
                                                <TextInput
                                                    style={LoginStyle.input}
                                                    placeholder="Enter login name"
                                                    placeholderTextColor='#BDBDBD'
                                                    onChangeText={(username) => {
                                                        this.setState({ userName: username })
                                                    }}
                                                />
                                            </View>
                                        </View>
                                        <View style={LoginStyle.inputWrapper}>
                                            <View style={LoginStyle.inputContainer}>
                                                <TextInput
                                                    style={LoginStyle.input}
                                                    placeholder="Enter password"
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
                                            backgroundColor: '#7B7A7A',
                                            borderColor: '#5F5C5C'
                                        }}
                                        activeStyle={{ backgroundColor: '#7B7A7A' }}
                                        onPress={this.onSignupAccountPress}
                                    >
                                        <Text style={{ color: 'white', fontWeight: '600' }}>
                                            SIGN UP ACCOUNT
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