import React, { Component } from 'react';
import { connect } from 'react-redux'

class CommentField extends Component {
  constructor(props) {
    super(props)
    this.submitReply = this.submitReply.bind(this)
  }

  submitReply = () => {
    const { postId, currentUserId } = this.props
    const content = document.getElementById("content").value
    if (currentUserId) {
      this.props.submitReply(postId, currentUserId, content)
    }
    document.getElementById("content").value = ""
  }

  render() {
    return (
      <div className="card card-body" style={{ marginBottom: 12 }}>
        <div style={{ fontWeight: 500, marginBottom: 6 }}>Reply to post</div>
        <textarea id="content" style={{ marginBottom: 6, width: '100%' }} rows="3"></textarea>
        <div className="d-flex justify-content-end">
          <button type="button" onClick={this.submitReply}>Reply</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.currentUserId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    submitReply: (postId, owner, content) => {
      dispatch({ type: 'SUBMIT_REPLY', data: { postId: postId, owner: owner, content: content } });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentField);