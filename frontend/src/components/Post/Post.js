import React, { Component } from "react";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    callApi("post", "GET", null).then(res => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    const { users } = this.props;
    // const { posts } = this.props;
    const { posts } = this.state;
    const { comments } = this.props;

    return (
      <>
        {posts.map(post => (
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
                  {users.map(user => {
                    if (post.owner === user.id) return user.name;
                  })}
                </p>
                <p>Create at: {Date(post.created_at).toString()}</p>
              </div>
              {posts.map(post => (
                <div className="post-tag">{post.tags}</div>
              ))}
            </div>
            <div className="post-content">{post.content}</div>
            <hr className="post-line"></hr>
            <div className="post-comment">
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Comment
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  {comments.map(comment => {
                    if (post.id === comment.post) return comment.content;
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

const mapStateToProps = state => {
  return {
    posts: state.posts,
    users: state.users,
    comments: state.comments
  };
};

export default connect(mapStateToProps, null)(Post);
