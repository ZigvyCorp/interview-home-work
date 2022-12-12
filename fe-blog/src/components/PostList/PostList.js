import React, {Component} from 'react';
import './postlist.css';
import PostCard from "../PostCard/PostCard";
import {Pagination} from "antd";
import {isArray} from "lodash";
import PropTypes from "prop-types";

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            perPage: 10,
            currentPage: 1,
            postListState: []
        }
    }

    async componentDidMount() {
        await this.handleChangePage(this.state.currentPage, this.state.perPage)
    }


    handlePaginate(page, perSize) {
        const cutPositionEnd = page * perSize
        const cutPositionStart = (page - 1) * perSize

        if (page === 1) {
            return this.props.posts.slice(0, cutPositionEnd)
        }
        if (page === this.props.posts.length) {
            const postsLength = this.props.posts.length
            return this.props.posts.slice(cutPositionStart, postsLength)
        }
        return this.props.posts.slice(cutPositionStart, cutPositionEnd)
    }

    handleChangePage(page, pageSize) {
        const posts = this.handlePaginate(page, pageSize)
        this.setState({
            perPage: pageSize, currentPage: page, postListState: posts
        })
    }

    render() {
        const {postListState, currentPage} = this.state
        const {posts} = this.props
        const postLength = isArray(posts) ? posts.length : 0
        return (<div className="postlist">
            <div className="postlist__main">
                {postListState.map((postItem) => {
                    return <PostCard key={postItem.id} postInfo={postItem}></PostCard>

                })}
            </div>
            <div className="postlist__footer">
                <Pagination current={currentPage} onChange={(page, pageSize) => this.handleChangePage(page, pageSize)}
                            total={postLength}></Pagination>
            </div>
        </div>);
    }
}

PostList.propTypes = {
    posts: PropTypes.array
};


export default PostList;