import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class LoadingScreen extends Component {
    componentDidMount(){
        setInterval(()=>{
            this.props.navigation.navigate("BlogRoute");
        },2000)
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>Loading screen</Text>
            </View>
        );
    }
}