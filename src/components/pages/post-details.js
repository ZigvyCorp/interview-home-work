import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCommentsArray } from '../../helpers/comment-helper';
import { formatDate } from '../../helpers/date-helper';
import { deserializeDate } from '../../helpers/object-helper';
import PostComment from '../post/post-comment';
import { getComments } from '../store/actions/comment-actions';
import PostCard from '../ui/post-card/post-card';
function PostDetails(props) {
  const params = useParams();
  const dispatch = useDispatch();
  const [commentsArray, setCommentsArray] = useState([]);
  const { postId } = params;
  const { items } = useSelector((state) => state.posts);
  const { commentsData, isFetching } = useSelector(
    (state) => state.comments
  );

  useEffect(() => {
    const array = getCommentsArray(postId, commentsData);

    if (array.length === 0) {
      dispatch(getComments(postId));
    }
    setCommentsArray(array);
  }, [commentsData, dispatch, postId]);

  const postDetails = items.find((post) => post.id === +postId);
  if (!postDetails) {
    return <p>There was an error while fetching post information</p>;
  }

  const { title, user, createdAt, body } = postDetails;

  const postCreatedAt = deserializeDate(createdAt);
  const formattedDate = formatDate(postCreatedAt);

  const commentsJSX = (
    <PostComment
      comments={commentsArray}
      postCreatedAt={postCreatedAt}
    />
  );

  let commentCount;
  if (isFetching) commentCount = 'Loading comments...';
  else {
    commentCount = `${commentsArray.length} comments`;
  }

  const postInfo = {
    postId,
    title,
    formattedDate,
    commentsJSX,
    commentCount,
    userName: user.name,
    content: body
  };

  return <PostCard postInfo={postInfo} />;
}

export default PostDetails;
