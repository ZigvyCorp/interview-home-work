import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/index';
import PostForm from './PostForm';
import history from '../../history';

class PostCreate extends React.Component {
  onSubmit = formValues => {
    let title = formValues.title;    
    let tag =formValues.tags.split(', ');
    let content = formValues.content;
    let formatValue = {title, tag, content};
    
    this.props.createPost(formatValue);
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