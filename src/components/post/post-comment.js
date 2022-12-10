import Card from 'react-bootstrap/Card';
import scss from './post-comment.module.scss';
import userImage from '../../assets/user/user-2.jpg';

function PostComment(props) {
  return (
    <div className={scss.comments}>
      <div className={scss.comment}>
        <img
          className={scss['user-image']}
          src={userImage}
          alt='user'
        />
        <Card className={scss['comment-details']}>
          <Card.Body>
            <div className={scss.info}>
              <p className={scss['user-name']}>Han Solo</p>
              <p className='text-muted'>a day ago</p>
            </div>
            <p className={scss.content}>
              est natus enim nihil est dolore omnis voluptatem
              numquam\net omnis occaecati quod ullam at\nvoluptatem
              error expedita pariatur\nnihil sint nostrum voluptatem
              reiciendis et
            </p>
          </Card.Body>
        </Card>
      </div>
      <div className={scss.comment}>
        <img
          className={scss['user-image']}
          src={userImage}
          alt='user'
        />
        <Card className={scss['comment-details']}>
          <Card.Body>
            <div className={scss.info}>
              <p className={scss['user-name']}>Han Solo</p>
              <p className='text-muted'>a day ago</p>
            </div>
            <p className={scss.content}>
              est natus enim nihil est dolore omnis voluptatem
              numquam\net omnis occaecati quod ullam at\nvoluptatem
              error expedita pariatur\nnihil sint nostrum voluptatem
              reiciendis et
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default PostComment;
