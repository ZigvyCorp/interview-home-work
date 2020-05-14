import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/index';
import PostForm from './PostForm';
import history from '../../history';

class PostCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createPost(formValues);
    history.push('/');
  };

  render() {
    return (
      <div>
        <h3>Create Post</h3>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    )
  }

}

export default connect(
  null,
  { createPost }
)(PostCreate);