import React, { useRef } from "react";
import './Post.scss'

export default function Post() {
  let showCommentRef = useRef('')
  let test = useRef('')

  const handleShowComment = () => {
    showCommentRef.current.classList.toggle('show__comments')
  }

  return <article className="posts">
    <div className="posts__item">
      <div className="posts__item--title">
        <p>Post 1</p>
      </div>
      <div className="posts__detail">
        <div className="detail__author">
        <p>Author: John Smith</p>
        <p>Created at: Sep 20, 2018</p>
        </div>
        <div className="detail__content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus inventore veniam eaque amet expedita quod quis. Voluptatum suscipit nobis ipsa, pariatur voluptas perferendis incidunt unde exercitationem hic, harum, sint iusto.</div>
      </div>
      <div className="posts__comments" ref={showCommentRef}>
        <button onClick={handleShowComment}>2 replies</button>
      </div>
      <div className="post__line"></div>
    </div>
  </article>
}
