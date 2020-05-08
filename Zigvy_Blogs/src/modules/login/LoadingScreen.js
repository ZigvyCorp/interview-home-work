import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import Spin from '@ant-design/react-native/lib/';

import { LoginStyle } from '../../styles/LoginComponentStyles'

export default class LoadingScreen extends Component {
    componentDidMount(){
        setInterval(()=>{
            this.props.navigation.navigate("BlogRoute");
        },2000)
    }

    render() {
        return (
            <ImageBackground
                source={require("../../resources/images/background.png")}
                style={LoginStyle.backgroundContainer}
                imageStyle={LoginStyle.backgroundImg}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: hp('22%'), width: wp('38%') }}>
                        <Image
                            source={require('../../resources/images/loading.gif')}
                            style={{
                                height: '100%',
                                width: '100%'
                            }}
                        />
                        <Text style={{fontSize:hp('3%'),color:'#ffff',marginTop:hp('1%')}}>Preparing data...</Text>
                    </View>
                </View>

            </ImageBackground>
        );
    }
}