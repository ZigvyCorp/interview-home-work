import React from 'react';
import { connect } from 'react-redux';
import * as types from '../../redux/actions/actionTypes'
import axios from 'axios';

class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);

    this.state = {
      title: '',
      content: '',
      tags: []
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    debugger;

    const {createNewPost} = this.props;
    const endpoint = 'http://localhost:8080/api/posts';
    const newPost = {
      title: this.state.title,
      content: this.state.content,
      tags: this.state.tags
    };
    const headers = {
      authentication: `jwt ${localStorage.getItem('token')}`
    }
    axios.post(endpoint, newPost, {headers: headers}).then(res => {
      if (res.data.post) {
        createNewPost(res.data.post)
      }
    }).catch(err => {
      throw err;
    })
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }

  handleContentChange(e) {
    this.setState({content: e.target.value});
  }

  handleTagsChange(e) {
    let tags = e.target.value.split(";");
    if (tags.length > 0) {
      // Multiple tags
      this.setState({tags: tags});
    } else {
      // Only one tag
      if (e.target.tags.length > 0) {
        this.setState({tags: [e.target.value]});
      }
    }
    
  }

  render() {
    return (
      <div className="card my-3">
        <div className="card-header card-article-title">
          New Post
        </div>
  
        <form className="form-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input name="post-title" className="form-control form-body" placeholder="Post title" type="text" value={this.state.title} onChange={this.handleTitleChange}></input>
          </div>
          <div className="form-group">
            <textarea name="post-content" className="form-control form-body" placeholder="Post content" value={this.state.content} onChange={this.handleContentChange} ></textarea>
          </div>
          <div className="form-group">
            <input name="post-tags" className="form-control form-body" placeholder="Post tags, separate by ;" type="text" value={this.state.tags} onChange={this.handleTagsChange} ></input>
          </div>
          <div className="form-group form-body">
            <button type="submit" className="btn btn-primary btn-block"> Create </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  createNewPost: post => dispatch({ type: types.CREATE_NEW_POST, post }),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);