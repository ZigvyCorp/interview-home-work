import React, { Component, useRef } from 'react';
import PropTypes from 'prop-types';
// Import Style
import styles from './PostCreateWidget.css';
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { getUsers } from '../../../../redux/reducer/UserReducer'
export function PostCreateWidget(props) {
  const { closeWidget } = props;
  const users = useSelector(state => getUsers(state)) 

  const inputTitle = useRef(null);
  const inputContent = useRef(null);
  function addPost(){
    const titleRef = inputTitle.current;
    const contentRef = inputContent.current;
    if (titleRef.value && contentRef.value) {
      props.addPost(users[0], titleRef.value, contentRef.value);
      titleRef.value = contentRef.value = '';
    }
  };

    const cls = `${styles.form} ${(props.showAddPost ? styles.appear : '')}`;

    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>
            Create new Post
          </h2>
          <input placeholder='Post title' className={styles['form-field']} ref={inputTitle} />
          <textarea placeholder={'Post content'} className={styles['form-field']} ref={inputContent} />
          <Button
          variant="primary"
          onClick={addPost}
          size="sm"
          >
            Submit
          </Button>
          <Button
          variant="secondary"
          onClick={closeWidget}
          className={styles['secondary-button']}
          size="sm"
          >
            Cancel
          </Button>
          {/* <a className={styles['post-submit-button']} href="#" onClick={addPost}>Submit</a> */}
        </div>
      </div>
    );
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
  closeWidget: PropTypes.func.isRequired
};

export default PostCreateWidget;
