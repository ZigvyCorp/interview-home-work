import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewPost extends Component {
  submitPost = () => {
    const { currentUserId } = this.props
    const title = document.getElementById("title").value
    const tags = document.getElementById("tags").value.split(" ")
    const content = document.getElementById("content").value

    if (currentUserId) {
      this.props.submitPost(currentUserId, title, tags, content)
    }
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="container" style={{ marginTop: 54 }}>
        <div className="row">
          <div className="col" style={{ marginTop: 24 }}>
            <div>Title</div>
            <input id="title" style={{ width: '100%' }} />

            <div style={{ marginTop: 24 }}>Tags</div>
            <input id="tags" style={{ width: '100%' }} />

            <div style={{ marginTop: 24 }}>Content</div>
            <textarea id="content" style={{ width: '100%' }} rows="3"></textarea>
            <div className="d-flex justify-content-center" style={{ margin: '24px 0px' }}>
              <button type="button" onClick={this.submitPost}>Post</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUserId,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    submitPost: (owner, title, tags, content) => {
      dispatch({ type: 'SUBMIT_POST', data: { owner: owner, title: title, tags: tags, content: content } });
    }
  }
};

NewPost = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost)

export default NewPost;