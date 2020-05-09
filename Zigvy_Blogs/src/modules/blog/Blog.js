import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'

import {
    OptionIcon,
    CommentIcon
} from '../../resources/VectorIcons'

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

    render() {
        return (
            <View style={{ height: hp('35%'), width: wp('90%'), backgroundColor: '#D2CCCC', borderRadius: hp('1%'), marginTop: hp('2%'), display: 'flex' }}>
                {/* post header */}
                <View style={{ flex: 1.5, flexDirection: 'row' }}>
                    <View style={{ flex: 0.8, alignItems: 'center' }}>
                        <View style={{ marginTop: hp('0.7%') }}>
                            <Image
                                source={require('../../resources/images/strange_avatar.jpg')}
                                style={{
                                    height: hp('8%'), 
                                    width: hp('8%'), 
                                    borderRadius: hp('8%') / 2,
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 3.7, }}>
                        <Text style={{ fontSize: hp('3.5%'), fontWeight: '600', marginLeft: wp('1%'), marginTop: hp('0.5%') }}>Name Here</Text>
                        <Text style={{ fontSize: hp('2.5%'), marginLeft: wp('1%'), marginTop: hp('0.2%'), color: '#464646' }}>At 12/12/2020</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 0.5, alignItems: 'center' }}>
                        <View>
                            <OptionIcon size={hp('4.4%')} style={{ marginTop: hp('2%') }} color="#2E2E2E" />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* post content */}
                <View style={{ flex: 2.5, alignItems: 'center', marginBottom: hp('0.5%') }}>
                    <View style={{ flex: 1, width: '94%' }}>
                        <Text style={{ fontSize: hp('3.4%') }}>
                            {this.props.blogData.content.substring(0, 101)}
                            <Text
                                style={{ color: '#051695' }}
                                onPress={() => { alert('load more') }}
                            >
                                ...More
                                </Text>
                        </Text>
                    </View>
                </View>
                {/* post footer */}
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity 
                        style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <CommentIcon color="#2E2E2E" size={hp('5%')} />
                    </TouchableOpacity>
                    <View style={{ flex: 8.5, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: hp('2.7%') }}>2 Comments</Text>
                    </View>
                </View>
            </View>
        );
    }
}