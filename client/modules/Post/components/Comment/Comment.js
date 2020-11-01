import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import moment from 'moment';
// Import Style
import styles from './Comment.css';

function Comment(props) {

  const { content, owner, created_at } = props;
  const now = moment()
  const createAt = moment.unix(created_at/1000)
  const diff = now.diff(createAt, 'days');
  const diffText = diff == 0 ? 'Today' : diff == 1 ? 'Yesterday' : `${diff} days ago`
  return (
      <div className={styles['single-comment']}>
        <p className={styles['author-name']}>{owner.name}</p>
        <p className={styles['comment-create']}>{diffText}</p>
        <p className={styles['comment-desc']}>{content}</p>
        {/* <hr className={styles.divider} /> */}
      </div>
  );
}
  
Comment.propTypes = {
  content: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  created_at: PropTypes.number.isRequired
};

export default Comment;
