import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import Post from 'common/Post';
import { getPosts } from 'util/js/APIs';

export default function HomePage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.post);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    const handleGetPosts = () => {
      dispatch({ type: 'GET_POSTS' });
      dispatch({ type: 'GET_COMMENT' });
    };

    handleGetPosts();
  }, []);
  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderPost = () => {
    return posts.map((post, index) => {
      return (
        <div key={index}>
          <Post
            title={post.title}
            author={post.author}
            timestamp={post.created_at}
            content={post.content}
            id={post.id}
          />
          {index !== posts.length - 1 && (
            <div className={`w-100 ${styles.spacer}`}></div>
          )}
        </div>
      );
    });
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return <div className="w-100 px-3">{renderPost()}</div>;
}
