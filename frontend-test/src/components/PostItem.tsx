import { List, Collapse } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCommentsOfPost } from '../store/actions';
import CommentSection from './CommentSection';

interface PostItemProps {
  post: any
  users: any[]
}

export default function PostItem(props: PostItemProps): JSX.Element {
  const { post, users } = props;
  const dispatch = useDispatch();
  const { comments } = useSelector((state: any) => state.comments);

  useEffect(() => {
    if (post) {
      dispatch(fetchCommentsOfPost({ id: post.id }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <List.Item
      key={post.id}
    >      
      <List.Item.Meta
        title={
          <>
            <div style={{ textAlign: 'center' }}>
              <h2>{post.title}</h2>
            </div>
            <div>
              <p>Author: {users?.find((user: any) => user.id === post.userId)?.name}</p>
              <p>Created Date: {(new Date()).toLocaleDateString()}</p>
            </div>
          </>
        }
        description={post.body}
      />
        <Collapse
          size="small"
          items={[{ key: '1', label: `Comments (${comments?.length})`, children: <CommentSection comments={comments} /> }]}
        />
    </List.Item>
  )
}
