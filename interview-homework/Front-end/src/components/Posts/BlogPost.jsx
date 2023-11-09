import './blogpost.css';
import { getRandomDate } from '../../utils/getRandomDate';
import Comment from '../Comments/Comment';

const BlogPost = ({ post, comments }) => {
  const { title: postTitle, body: postBody, id: postId } = post;

  const randomDate = getRandomDate();

  const postComments = comments.filter(comment => comment.postId === postId);

  return (
    <div className='p-2 border-bottom border-3 border-dark'>
      <div className='card-body'>
        <h1 className='card-title mb-2 text-center fw-bold'>{postTitle}</h1>
        <h6 className='card-subtitle mb-5 fw-bold d-flex flex-column'>
          <span className='mb-2'>Author: Adam Levin</span>
          <span>Created at: {randomDate}</span>
        </h6>
        <h6 className='card-text d-flex justify-content-center fw-bold'>
          {postBody.substring(0, 100)}...{' '}
          <a className='' href='/'>
            Read more
          </a>
        </h6>{' '}
        <p className='d-flex'>
          <a
            className='btn text-start border-bottom text-body-secondary p-2 mb-2'
            data-bs-toggle='collapse'
            href={`#id${postId}`}
            role='button'
            aria-expanded='false'
            aria-controls={`id${postId}`}
            style={{ width: '100%' }}
          >
            {postComments.length} replies
          </a>
        </p>
        <div className='collapse' id={`id${postId}`}>
          {postComments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogPost;
