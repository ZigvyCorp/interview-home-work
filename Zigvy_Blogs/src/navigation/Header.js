import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import {
    SearchIcon
} from '../resources/VectorIcons'


export default class Header extends Component {

    onSearchPress= () => {
        alert('Feature is under construction :( Sorry for the inconvenience...')
    }

    render() {
        return (
            <View style={{ height: hp('9%'), width: wp('100%'), backgroundColor: '#4B4B4C', display: 'flex', flexDirection: 'row' }}>
                <StatusBar backgroundColor="#4B4B4C" />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{
                            height: hp('7%'),
                            width: hp('7%'),
                            borderRadius: hp('7%') / 2,
                        }}
                        source={require('../resources/images/avatar.jpg')}
                    />
                </View>
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ letterSpacing: 5, color: '#fff', fontSize: hp('3.5%') }}>BLOGS</Text>
                </View>
                <TouchableOpacity 
                    style={{ flex: 1 ,justifyContent:'center',alignItems:'center'}}
                    onPress={this.onSearchPress}
                >
                        <SearchIcon size={hp('5%')} color="#fff"/>
                </TouchableOpacity>
            </View>
        );
    }
}