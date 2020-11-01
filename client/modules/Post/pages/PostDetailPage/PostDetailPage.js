import React, { Component, useEffect } from 'react';

import Helmet from 'react-helmet';
import { useDispatch, useSelector } from "react-redux";
// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { getPostDetailRequest } from '../../../../redux/actions/PostActions';

// Import Selectors
import { getPost, getPostDetailLoading } from '../../../../redux/reducer/PostReducer';

export function PostDetailPage(props) {

  const dispatch = useDispatch();
  const post = useSelector(state => getPost(state))
  const isLoading = useSelector(state => getPostDetailLoading(state))
  useEffect(()=>{
    dispatch(getPostDetailRequest(props.params._id));
  },[])

  return !isLoading ? (
    <div>
      <Helmet title={post.title} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{post.title}</h3>
        <p className={styles['author-name']}>{post.owner && post.owner.name}</p>
        <p className={styles['post-desc']}>{post.content}</p>
      </div>
    </div>
  ) : <div />
  ;
}

export default PostDetailPage;
