import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "../components/Header/Header";
import PostList from "../components/PostList/PostList";
import {getPostsRequest} from "../redux/postsSlice";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        await this.props.getPosts();
    }

    render() {
        const {postList} = this.props
        return (<div>
            <Header></Header>
            <PostList posts={postList} ></PostList>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        postList: state.posts.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            dispatch(getPostsRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);