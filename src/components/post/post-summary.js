import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsArray } from '../../helpers/comment-helper';
import { formatDate } from '../../helpers/date-helper';
import {
  deserializeDate,
  deserializeMap
} from '../../helpers/object-helper';
import {
  getComments,
  getTotalComments
} from '../store/actions/comment-actions';
import PostCard from '../ui/post-card/post-card';
import PostComment from './post-comment';

function PostSummary({ user, id, title, body: detail, createdAt }) {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
  const [commentsArray, setCommentsArray] = useState([]);
  const [commentCount, setCommentCount] = useState(0);

  const { commentsData, commentsCount, isFetching, hasError } =
    useSelector((state) => state.comments);

  // Update fetched comment data in case storage changes
  useEffect(() => {
    const array = getCommentsArray(id, commentsData);
    setCommentsArray(array);
  }, [commentsData, id]);

  // Update fetched comment count in case storage changes
  useEffect(() => {
    const commentsCountMap = deserializeMap(commentsCount);
    const count =
      commentsCountMap.size > 0
        ? `${commentsCountMap.get(id)} comments`
        : 'Loading';
    setCommentCount(count);
  }, [commentsCount, id]);

  useEffect(() => {
    dispatch(getTotalComments(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (showComments && commentsArray.length === 0) {
      dispatch(getComments(id));
    }
  }, [showComments, dispatch, id, commentsArray]);

  const postCreatedAt = deserializeDate(createdAt);
  const formattedDate = formatDate(postCreatedAt);

  function toggleComments() {
    setShowComments((prev) => !prev);
  }
  let summary = detail.slice(0, 100).trim();
  if (summary !== detail) summary += '...';

  let commentsJSX;
  if (showComments) {
    //Avoid loading animation when it already has comments data (while showing)
    if (isFetching && commentsArray.length === 0) {
      commentsJSX = (
        <Spinner
          className='mt-2'
          variant='primary'
          style={{
            width: '3rem',
            height: '3rem'
          }}
        />
      );
    } else if (hasError) {
      <p>There was an error while fetching comments data</p>;
    } else {
      commentsJSX = (
        <PostComment
          comments={commentsArray}
          postCreatedAt={postCreatedAt}
        />
      );
    }
  }

  const postInfo = {
    id,
    title,
    formattedDate,
    commentsJSX,
    commentCount,
    userName: user.name,
    content: summary
  };

  const action = { toggleComments };

  return <PostCard postInfo={postInfo} action={action} />;
}

export default PostSummary;
