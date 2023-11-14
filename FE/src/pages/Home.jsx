// import { SearchInput } from '../components/SearchInput';
import { Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useEffect } from 'react';
const { Text } = Typography;
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../redux/Reducers/postSlice';
import { Post } from '../components/Post';
import { CommentSection } from '../components/CommentSection.jsx';
import { fetchComment } from '../redux/Reducers/commentSlice';

export function Home() {
  const posts = useSelector((state) => state.postSlice.posts);
  const comments = useSelector((state) => state.commentSlice.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
    dispatch(fetchComment());
  }, [dispatch]);
  return (
    <>
      {/* <SearchInput /> */}
      {!posts || posts.length === 0 ? (
        <Content style={{ textAlign: 'center' }}>
          <Text strong style={{ fontSize: '24px' }}>
            No posts available
          </Text>
        </Content>
      ) : (
        posts.map((post) => (
          <div
            wrap="wrap"
            style={{
              border: '1px solid black',
              padding: '0 30px 20px 30px',
            }}
            key={post._id}
          >
            <Post props={post} />
            <CommentSection postId={post._id} comments={comments} />
          </div>
        ))
      )}
    </>
  );
}
