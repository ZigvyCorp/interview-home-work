import React,{Component} from 'react';
import { 
    View,
    Text,
 } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'

export default class Header extends Component {
    render() {
        return (
            <View style={{height:hp('10%'),width:wp('100%'), backgroundColor:'#ffff'}}>
                <Text onPress={this.onCreatePress}>Hi im header</Text>
            </View>
        );
    }
}