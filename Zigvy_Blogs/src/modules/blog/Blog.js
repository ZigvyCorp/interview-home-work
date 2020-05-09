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
import { USER_PROFILE } from '../../utils/Configs';
import {BlogStyle} from '../../styles/BlogComponentStyles'

export default class Blog extends Component {
    render() {
        const { blogData } = this.props
        const avatarImage = blogData.owner.id != USER_PROFILE.USER_ID 
            ? require('../../resources/images/strange_avatar.jpg') 
            : require('../../resources/images/avatar.jpg')

        return (
            <View style={BlogStyle.postContainer}>
                {/* post header */}
                <View style={BlogStyle.postHeaderContainer}>
                    <View style={BlogStyle.ownerAvatarContainer}>
                        <View style={{ marginTop: hp('0.7%') }}>
                            <Image
                                source={avatarImage}
                                style={BlogStyle.ownerAvatarHolder}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 3.7 }}>
                        <Text style={BlogStyle.ownerName}>
                            {blogData.owner.displayName.length > 0 ? blogData.owner.displayName : 'Anonymous'}
                        </Text>
                        <Text style={BlogStyle.postCreatedDate}>
                            At 9/5/2020
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={{ flex: 0.5, alignItems: 'center' }}
                        onPress={()=>{alert('Feature is under construction :( Sorry for the inconvenience...')}}
                    >
                        <View>
                            <OptionIcon size={hp('3.8%')} style={{ marginTop: hp('2%') }} color="#2E2E2E" />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* post content */}
                <View style={BlogStyle.postContentContainer}>
                    <View style={{ flex: 1, width: '96%' }}>
                        <Text style={{ fontSize: hp('2.8%') }}>
                            {blogData.content.substring(0, 101)}
                            <Text
                                style={{ color: '#051695' }}
                                onPress={() => { alert('Feature is under construction :( Sorry for the inconvenience...') }}
                            >
                                ...More
                                </Text>
                        </Text>
                    </View>
                </View>

                {/* post footer */}
                <View style={BlogStyle.postCommentContainer}>
                    <TouchableOpacity
                        style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}
                        onPress={()=>{alert('Feature is under construction :( Sorry for the inconvenience...')}}
                    >
                        <CommentIcon color="#2E2E2E" size={hp('5%')} />
                    </TouchableOpacity>
                    <View style={{ flex: 8.5, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: hp('2.7%') }}>{blogData.comments.length} Comments</Text>
                    </View>
                </View>
            </View>
        );
    }
}