import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Button from '@ant-design/react-native/lib/button';

export default class BlogMainScreen extends Component {
    onBlogPress = () => {
        this.props.navigation.navigate("BlogDetailScreen")
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>Home screen</Text>
                <Button style={{ marginTop: 10 }} onPress={this.onBlogPress}>Blog detail</Button>
            </View>
        );
    }
}