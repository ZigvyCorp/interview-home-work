import Input from "antd/es/input/Input";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { GET_LIST_COMMANDS, GET_LIST_USERS } from "../../Redux/Constant/Constant";
import { setIsShowComment } from "../../Redux/Reducers/CommentReducer";
import { updatedListPost } from "../../Redux/Reducers/PostsReducer";
import './Post.scss'

export default function Post() {
  const dispatch = useDispatch()
  const { posts, postsUpdate } = useSelector(state => state.PostsReducerPersist)
  const { users } = useSelector(state => state.UsersReducer)
  const { comments } = useSelector(state => state.CommentReducer)
  let debouceSearchRef = useRef(null)

  const handleShowComment = (e) => {
    const commentDiv = e.target.closest('.comments')
    commentDiv.querySelector('.posts__comments')?.classList.toggle('show__comments')
    commentDiv.querySelector('.comment__list')?.classList.toggle('show__comments')
  }

  useEffect(() => {
    dispatch({ type: GET_LIST_USERS })
    dispatch({ type: GET_LIST_COMMANDS })
  }, [])

  const handleChange = (e) => {
    if (debouceSearchRef.current != null) {
      clearTimeout(debouceSearchRef.current)
    }
    
    debouceSearchRef.current = setTimeout(()=>{
      dispatch(updatedListPost(e.target.value))
    }, 300)
  }

  const renderComment = (post) => {
    let commentFilter = comments.filter((comment => comment.postId === post.id))
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
    return postsUpdate.map(post => {
      return <div key={post.id} className="posts__item">
        <div className="posts__item--title">
          <NavLink to={`/post_detail/:${post.id}`}>{post.title}</NavLink>
        </div>
        <div className="posts__detail">
          <div className="detail__author">
            <p>Author: {users.find(user => user.id === post.userId)?.name}</p>
            <p>Created at: Sep 20, 2018</p>
          </div>
          <div className="detail__content">{post.body > 100 ? post.body.slice(0, 100) : post.body.slice(0, 97) + ' ...'}</div>
        </div>

        <div className="comments">
          <div className="posts__comments">
            <button onClick={handleShowComment}>{comments.filter((comment => comment.postId === post.id)).length} replies</button>
          </div>
          <div className="post__line"></div>
          <div className="comment__list">
            {renderComment(post)}
          </div>
        </div>
      </div>
    })
  }

  return <article className="posts">
    <div className="post__search">
      <Input placeholder="Search posts title here" onChange={handleChange}/>
    </div>
    {renderPost()}
  </article>
}
