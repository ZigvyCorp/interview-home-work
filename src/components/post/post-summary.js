import Card from 'react-bootstrap/Card';
import PostComment from './post-comment';
import scss from './post-summary.module.scss';
import concat from 'classnames';
import { NavLink } from 'react-router-dom';

function Post({ userId, id, title, body: detail, createdAt }) {
  let summary = detail.slice(0, 100).trim();
  if (summary !== detail) summary += '...';
  const formattedDate = new Date(createdAt).toLocaleDateString(
    'en-US'
  );
  return (
    <Card className={concat('shadow', 'border-2', 'p-4')}>
      <Card.Body>
        <div className='mb-5'>
          <Card.Title className='text-center mb-4 font-weight-bold'>
            {title}
          </Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            <span>Author: </span>
            {id}
          </Card.Subtitle>

          <Card.Subtitle className='mb-2 text-muted'>
            <span>Created at: </span>
            {formattedDate}
          </Card.Subtitle>
          <p className={scss.body}>{summary}</p>

          <div className={scss.actions}>
            <button className={scss['comments-toggle']}>
              2 comments
            </button>
            <NavLink to='/'>
              <button
                className={concat(
                  'btn btn-primary shadow-sm',
                  scss.button
                )}>
                Discover more
              </button>
            </NavLink>
          </div>
        </div>
        <PostComment />
      </Card.Body>
    </Card>
  );
}

export default Post;
