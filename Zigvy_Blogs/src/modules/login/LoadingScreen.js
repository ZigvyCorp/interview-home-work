import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    BackHandler,
    Alert
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { connect } from 'react-redux';

import { LoginStyle } from '../../styles/LoginComponentStyles'
import {
    getBlogList
} from '../../redux/actions/blogActions/BlogActions'
import { ACTION_STATUS } from '../../utils/Configs';

class LoadingScreen extends Component {

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', ()=>true);
        this.props.getBlogList()
    }

    componentDidUpdate(prevProps){
        if(
            this.props.blogList != prevProps.blogList &&
            this.props.getBlogStatus == ACTION_STATUS.SUCCESS
        ){
            setInterval(()=>{
                this.props.navigation.navigate("BlogRoute");
            },2000)
        }else if(
            this.props.getBlogStatus == ACTION_STATUS.FAILED
        ){
            this.onGetBlogListFailed()
        }
    }

    onGetBlogListFailed = () => {
        Alert.alert(
            'Failed To Get Data',
            this.props.blogReducer.getBlogFailedMessage,
            [
                {
                    text: "Try again",
                    onPress: () => {},
                },
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <ImageBackground
                source={require("../../resources/images/background.png")}
                style={LoginStyle.backgroundContainer}
                imageStyle={LoginStyle.backgroundImg}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: hp('22%'), width: wp('50%') }}>
                        <Image
                            source={require('../../resources/images/loading.gif')}
                            style={{
                                height: '100%',
                                width: '100%'
                            }}
                        />
                        <Text style={{fontSize:hp('2.8%'),color:'#ffff',marginTop:hp('1%')}}>Preparing data...</Text>
                    </View>
                </View>

            </ImageBackground>
        );
    }
}

function mapStateToProps (state){
    return{
        blogList: state.blogReducer.blogList,
        getBlogStatus: state.blogReducer.getBlogStatus,
    }
}

export default connect(mapStateToProps, {
    getBlogList
})(LoadingScreen);