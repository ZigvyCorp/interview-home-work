import React, { Component } from "react";
import Post from "../../components/Posts/Post/Post";
import Comments from "../../components/Comments/Comments";
import classes from "./FullPost.module.css";
import { connect } from "react-redux";
import { fetchLoadedPost, fetchLoadedComments } from "../../store/actions/post";

class FullPost extends Component {
  state = {
    loadedPost: null,
    loadedCmt: null,
  };

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.id)
      ) {
        this.props.fetchLoadedPost(this.props.match.params.id);
        this.props.fetchLoadedComments(this.props.match.params.id);
      }
    }
  }

  render() {
    let post = null;
    if (this.props.loadedPost) {
      post = (
        <Post
          title={this.props.loadedPost.title}
          body={this.props.loadedPost.body}
        />
      );
    }
    let cmts = null;
    if (this.props.loadedCmt) {
      cmts = (
        <Comments id={+this.props.match.params.id} cmt={this.props.loadedCmt} />
      );
    }
    return (
      <div className={classes.FullPosts}>
        {post}
        {cmts}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadedPost: state.posts.loadedPost,
    loadedCmt: state.posts.loadedCmt,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLoadedPost: (id) => dispatch(fetchLoadedPost(id)),
    fetchLoadedComments: (id) => dispatch(fetchLoadedComments(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
