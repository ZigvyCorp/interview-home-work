import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostItem, getCommentByPost } from '../../fetchers/blog';
import PostItem from '../../components/PostItem';
import { getUserById } from '../../fetchers/user';
import Loading from '../../components/Loading';

const PostDetails = () => {
  const params = useParams();
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const getPost = async (postId) => {
    setIsLoading(true);
    const data = await getPostItem(postId);
    const user = await getUserById(data.userId);
    const comments = await getCommentByPost(data.id);
    setIsLoading(false);
    data.user = user;
    data.comments = comments;
    console.log({ data });
    setPost(data);
  };
  useEffect(() => {
    const postId = params.postId;
    getPost(postId);
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> : <div>{post && <PostItem post={post} />}</div>}
    </div>
  );
};

export default PostDetails;
