import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_LIST_COMMANDS, GET_LIST_POSTS, GET_LIST_USERS } from "../../Redux/Constant/Constant";
import './PostDetail.scss';

export default function PostDetail() {
  const { posts } = useSelector(state => state.PostsReducerPersist)
  const { users } = useSelector(state => state.UsersReducer)
  const { comments } = useSelector(state => state.CommentReducer)
  const dispatch = useDispatch()

  const queryParam = useParams()
  const index = queryParam.id[1] - 1

  useEffect(() => {
    dispatch({ type: GET_LIST_POSTS })
    dispatch({ type: GET_LIST_USERS })
    dispatch({ type: GET_LIST_COMMANDS })
  }, [])

  const handleShowComment = (e) => {
    const commentDiv = e.target.closest('.comments')
    commentDiv.querySelector('.posts__comments')?.classList.toggle('show__comments')
    commentDiv.querySelector('.comment__list')?.classList.toggle('show__comments')
  }

  const renderComment = (id) => {
    let commentFilter = comments.filter((comment => comment.postId === id))
    return commentFilter.map(comment => {
      return <div key={comment.id} className="comment__item">
        <div className="avatar">{comment.name[0].toUpperCase()}</div>
        <div className="comment__detail">
          <div className="comment__detail--author">{comment.name}</div>
          <div className="comment__detail--content">{comment.body}</div>
          <div className="comment__detail--reply">Reply to</div>
        </div>
      </div>
    })
  }

  const renderPost = () => {
    return <div className="posts__item container">
      <div className="posts__item--title">
        <p>{posts[index]?.title}</p>
      </div>
      <div className="posts__detail">
        <div className="detail__author">
          <p>Author: {users?.find(user => user.id === posts[index]?.userId)?.name}</p>
          <p>Created at: Sep 20, 2018</p>
        </div>
        <div className="detail__content">{posts[index]?.body}</div>
      </div>

      <div className="comments">
        <div className="posts__comments">
          <button onClick={handleShowComment}>{comments.filter((comment => comment.postId === posts[index]?.id)).length} replies</button>
        </div>
        <div className="post__line"></div>
        <div className="comment__list">
          {renderComment(index)}
        </div>
      </div>
    </div>
  }


  return <article className="posts__detail--page">
    {renderPost()}
  </article>
}
