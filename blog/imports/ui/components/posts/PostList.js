import React from 'react';
import { fetchAllPosts } from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import PostItem from './PostItem';

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return <PostItem key={post.id} post={post} />
    })
  }

  renderCreatePost() {

    if (this.props.isLogin) {
      return (
        <Link to="/post/new" className="btn btn-success"> Add Post </Link>
      )
    }
  }
  render() {
    return (
      <div className="body-page">
        {this.renderCreatePost()}
        {this.renderList()}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts),
    isLogin: Meteor.loggingIn()
  };
};

export default connect(
  mapStateToProps,
  { fetchAllPosts }
)(PostList);
