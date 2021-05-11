import React, { Component } from "react";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: [],
            users: [],
        };
    }

    componentDidMount() {
        callApi("post", "GET", null).then((res) => {
            this.setState({ posts: res.data });
        });
        callApi("comment", "GET", null).then((res) => {
            this.setState({ comments: res.data });
        });
        callApi("user", "GET", null).then((res) => {
            this.setState({ users: res.data });
        });
    }

    render() {
        const { users } = this.state;
        const { posts } = this.state;
        const { comments } = this.state;

        return (
            <>
                {posts.map((post) => (
                    <div className="container post">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 col-xs-12">
                                <h1 className="text-xs-center post-title">
                                    {post.title}
                                    <div></div>
                                </h1>
                            </div>
                        </div>
                        <div className="post-header">
                            <div className="post-info">
                                <p>
                                    Author:
                                    {users.map((user) => {
                                        if (post.owner === user.id)
                                            return user.name;
                                    })}
                                </p>
                                <p>
                                    Create at:{" "}
                                    {Date(post.created_at).toString()}
                                </p>
                            </div>
                            <div className="post-tags">
                                {post.tags.map((tag) => (
                                    <div className="post-tag">{tag}</div>
                                ))}
                            </div>
                        </div>
                        <div className="post-content">{post.content}</div>
                        <hr className="post-line"></hr>
                        <div className="post-comment">
                            <p>
                                <button
                                    className="btn btn-prim"
                                    data-bs-toggle="collapse"
                                    data-bs-target={
                                        "#collapseExample" + post.id
                                    }
                                >
                                    Comment
                                </button>
                            </p>
                            <div
                                className="collapse"
                                id={"collapseExample" + post.id}
                            >
                                <div className="card card-body">
                                    {comments.map((comment) => {
                                        if (post.id === comment.post) {
                                            return <p>{comment.content}</p>;
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                        <hr className="post-line"></hr>
                    </div>
                ))}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        users: state.users,
        comments: state.comments,
    };
};

export default connect(mapStateToProps, null)(Post);
