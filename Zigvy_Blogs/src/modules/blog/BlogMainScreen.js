import React, { Component } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import Modal from 'react-native-modalbox';
import { connect } from 'react-redux';

import Blogs from '../../data/posts.json'
import Blog from './Blog';

class BlogMainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postsList: [],
            isOpenComment: false
        }
    }

    componentDidMount() {
        this.setState({ postsList: Blogs })
    }

    onMorePress = () => {
        this.props.navigation.navigate("BlogDetailScreen");
    }

    renderItem({item,index}){
        return (<Blog blogData={item}/>)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#343435', alignItems: 'center' }}>
                <FlatList
                    data={this.props.blogList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                    style={{marginBottom:hp('1%')}}
                />
            </View>
        );
    }
}

function mapStateToProps (state){
    return{
        blogList: state.blogReducer.blogList,
    }
}

export default connect(mapStateToProps, {
    
})(BlogMainScreen);