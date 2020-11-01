import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import moment from 'moment';
// Import Style
import styles from './PostListItem.css';
import Comment from '../Comment/Comment';
import Accordion from 'react-bootstrap/Accordion'
import { Button } from 'react-bootstrap'

function PostListItem(props) {
  const { comments, post } = props;
  const createAt = moment.unix(post.dateAdded/1000).format("DD-MM-YYYY")
  const replyText = comments.length > 1 ? `${comments.length} replies` : `${comments.length} reply`
  const contentShorten = post.content.length > 100 ? post.content.substring(0, 100) + '... See more' : post.content.length 

  function returnVariant(index) {
    switch (index) {
      case 0:
              return 'outline-primary'
      case 1:
              return 'outline-secondary'
      case 2:
              return 'outline-success'
      case 3:
              return 'outline-warning'
      case 4:
              return 'outline-danger'
      case 5:
              return 'outline-info'
      default:
        break;
    }
  }

  return (
      <div className={styles['single-post']}>
        <Link to={`/posts/${post._id}`} >
         
            <h3 className={styles['post-title']}>
                {props.post.title}
            </h3>
            <div className={styles['post-tags']}>
                {
                  post.tags.map((tag, index) => (
                    
                    <Button key={index.toString()} variant={returnVariant(index)}>{tag}</Button>
                  ))
                }
            </div>
          <p className={styles['author-name']}>{post.owner.name}</p>
          <p className={styles['post-create']}>Create at: {createAt}</p>
          <p className={styles['post-desc']}>{contentShorten}</p>
        </Link>
        <Accordion>
        {comments.length > 0 &&
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <p className={styles['reply-desc']}>{replyText}</p>
          </Accordion.Toggle>
        }
        {
          <Accordion.Collapse eventKey="0">
            <div>
            {
              comments.map(com=>(
                <Comment 
                key={com._id.toString()}
                owner={com.owner}
                content={com.content}
                created_at={com.created_at}
                />
              ))
            }
            </div>
          </Accordion.Collapse>
        }
        </Accordion>
        <hr className={styles.divider} />
      </div>
  );
}



PostListItem.propTypes = {
  post: PropTypes.shape({
    owner: PropTypes.oneOfType([ PropTypes.object, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    dateAdded: PropTypes.number.isRequired
  }).isRequired,
  comments: PropTypes.array
};

export default PostListItem;
