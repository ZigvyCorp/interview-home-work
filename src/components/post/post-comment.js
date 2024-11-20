import Card from 'react-bootstrap/Card';
import scss from './post-comment.module.scss';
import userImage from '../../assets/user/user-2.jpg';
import concat from 'classnames';
import {
  getRandomDate,
  getTimeDifference
} from '../../helpers/date-helper';

function Comment({ name, content, timeDifference }) {
  return (
    <div className={scss.comment}>
      <img
        className={scss['user-image']}
        src={userImage}
        alt='user'
      />
      <Card className={scss['comment-details']}>
        <Card.Body>
          <div className={scss.info}>
            <p className={scss['user-name']}>{name}</p>
            <p className='text-muted'>{timeDifference}</p>
          </div>
          <p className={scss.content}>{content}</p>
        </Card.Body>
      </Card>
    </div>
  );
}

function PostComment({ comments, postCreatedAt }) {
  const commentCreatedAt = getRandomDate(
    new Date('2019-09-13'),
    new Date('2022-09-13')
  );
  const timeDifference = getTimeDifference(
    postCreatedAt,
    commentCreatedAt
  );
  return (
    <div className={concat(scss.comments, 'mt-5')}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          content={comment.body}
          timeDifference={timeDifference}
        />
      ))}
    </div>
  );
}

export default PostComment;
