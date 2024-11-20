import React, {Component} from 'react';
import './postcard.css';
import PropTypes from 'prop-types';
import {Divider} from "antd";
import api from "../../api";
import Comments from "../Comment/Comments";

class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowComment: false, comments: [], author: ''
        }
    }

    async componentDidMount() {
        const [commentsFlag, authorFlag] = await Promise.all([this.getCommentsByPostId(this.props.postInfo?.id || 0), this.getAuthorByPostId(this.props.postInfo.userId)])
        commentsFlag ? this.setState({
            comments: commentsFlag
        }) : this.setState({
            comments: []
        })
        authorFlag ? this.setState({
            author: authorFlag?.name
        }) : this.setState({
            author: '--'
        })
    }

    async getCommentsByPostId(id = 0) {
        try {
            const data = await api.posts.getComments(id)
            return data
        } catch (e) {
            return undefined
        }
    }

    async getAuthorByPostId(id = 0) {
        try {
            const data = await api.users.detail(id)
            return data
        } catch (e) {
            return undefined
        }
    }

    handleShowComment() {
        this.setState({
            isShowComment: !this.state.isShowComment
        })
    }

    render() {
        const {isShowComment, comments, author} = this.state
        const {title, body} = this.props.postInfo
        return (<div className="postcard">
            <div className="postcard__title">{title}</div>
            <div className="postcard__info">
                <p>Author: {author}</p>
                <p>Create At: 12-12-2022</p>
            </div>
            <p className="postcard__content">{body.slice(0, 100)}</p>
            <div className="postcard__comment">
                <p onClick={() => this.handleShowComment()}>{comments.length || 0} Comment</p>
                {isShowComment ? comments.map((item) => {
                    return <Comments key={item.id} commentInfo={item}></Comments>
                }) : ''}
                <Divider></Divider>
            </div>
        </div>);
    }
}

PostCard.propTypes = {
    postInfo: PropTypes.object
};

export default PostCard;