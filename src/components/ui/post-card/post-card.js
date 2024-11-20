import scss from './post-card.module.scss';
import concat from 'classnames';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function PostCard({ postInfo, action }) {
  const {
    id,
    title,
    userName,
    content,
    formattedDate,
    commentCount,
    commentsJSX
  } = postInfo;

  //No Toggling Comments = Post Details = No Button Clicks
  const toggleComments = action?.toggleComments;

  return (
    <Card className={concat('shadow', 'border-2', 'p-4')}>
      <Card.Body>
        <div>
          <Card.Title className='text-center mb-4 font-weight-bold'>
            {title}
          </Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            <span>Author: </span>
            {userName}
          </Card.Subtitle>

          <Card.Subtitle className='mb-2 text-muted'>
            <span>Created at: </span>
            {formattedDate}
          </Card.Subtitle>
          <p>{content}</p>

          <div className={scss.actions}>
            <button
              className={scss['comments-toggle']}
              onClick={toggleComments}>
              {commentCount}
            </button>
            {toggleComments && (
              <NavLink to={`/posts/${id}`}>
                <button
                  className={concat(
                    'btn btn-primary shadow-sm',
                    scss.button
                  )}>
                  Discover more
                </button>
              </NavLink>
            )}
          </div>
        </div>
        {commentsJSX}
      </Card.Body>
    </Card>
  );
}

export default PostCard;
