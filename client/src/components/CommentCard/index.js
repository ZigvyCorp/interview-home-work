import React from 'react';
import { connect } from 'react-redux'

const CommentCard = ({
  owner,
  createdAt,
  content,
  userList
}) => {
  const author = userList.filter(user => user.id == owner)
  return (
    <div className="card card-body" style={{ marginBottom: 12 }}>
      <div>
        <span style={{ fontWeight: 600 }}>{author[0].name || 'Anonymous'}</span>
        <span style={{ marginLeft: 12, color: '#D3D3D3', fontSize: 12, fontStyle: 'italic' }}>{createdAt}</span>
      </div>
      <div style={{ marginTop: 12 }}>{content}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userList: state.userList
  }
};

export default connect(mapStateToProps, null)(CommentCard);