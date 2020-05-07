import React from 'react';
import CommentCard from '../CommentCard';

const PostCard = ({
  id,
  title,
  author,
  createdAt,
  shortContent,
  commentList
}) => {
  const commentListId = "collapseComment" + id
  return (
    <div className="row" style={{ marginBottom: 20 }}>
      <div className="card card-body">
        <h2 className="text-center">{title}</h2>
        <div>Author: {author || 'Anonymous'}</div>
        <div>Created at: {createdAt}</div>
        <div style={{ marginTop: 12 }}>{shortContent}</div>
        <div style={{ marginTop: 24 }}>
          <a href={`#${commentListId}`} role="button" data-toggle="collapse"
            aria-expanded="false" aria-controls={commentListId}
            style={commentList.length < 1 ? {color: '#A9A9A9', pointerEvents: 'none', textDecoration: 'none'} : {}}
          >
            {commentList.length} {commentList.length > 1 ? 'replies' : 'reply'}
          </a>
          <div className="collapse" id={commentListId} style={{ marginTop: 16 }}>
            {commentList.map(comment => (
              <CommentCard
                owner={comment.owner}
                createdAt={comment.created_at}
                content={comment.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard;