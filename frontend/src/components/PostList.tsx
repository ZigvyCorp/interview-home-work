import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Input, List, Skeleton, Typography, Avatar, Layout } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { debounce } from 'lodash';
import PostCard from './PostCard';
import { SmileOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Header, Content } = Layout;

const PostList: React.FC = () => {
  const dispatch = useDispatch();
  const limit = 5; 
  const [searchTerm, setSearchTerm] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const [expandedPostIds, setExpandedPostIds] = useState<string[]>([]);
  const [totalFilteredPosts, setTotalFilteredPosts] = useState(0);

  const posts = useSelector((state: RootState) => state.posts.posts);
  const totalPosts = useSelector((state: RootState) => state.posts.totalPosts);
  const users = useSelector((state: RootState) => state.users.users);
  const comments = useSelector((state: RootState) => state.comments.comments);

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS' });
    dispatch({ type: 'FETCH_COMMENTS' });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: 'FETCH_POSTS', payload: { limit, skip: 0, query: searchTerm } });
  }, [dispatch, searchTerm]);

  useEffect(() => {
    setTotalFilteredPosts(totalPosts); 
    setHasMore(posts.length < totalFilteredPosts); 
  }, [posts, totalPosts]);

  const handleSearchChange = useCallback(
    debounce((value: string) => {
      setSearchTerm(value.trim());
    }, 300),
    []
  );

  const loadMorePosts = useCallback(
    debounce(() => {
      if (posts.length >= totalFilteredPosts) {
        setHasMore(false);
        return;
      }
      dispatch({ type: 'FETCH_MORE_POSTS', payload: { limit, skip: posts.length, query: searchTerm } });
    }, 300), 
    [dispatch, posts.length, totalFilteredPosts, searchTerm]
  );

  const toggleComments = (postId: string) => {
    setExpandedPostIds(prevIds =>
      prevIds.includes(postId) ? prevIds.filter(_id => _id !== postId) : [...prevIds, postId]
    );
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#1890ff', color: '#fff', display: 'flex', alignItems: 'center', paddingLeft: 100, paddingRight: 100 }}>
        <Avatar src="https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png" style={{ marginRight: 10 }} />
        <Title level={3} style={{ color: '#fff', margin: 0, flexGrow: 1 }}>Blog</Title>
        <Input
          placeholder="Tìm kiếm bài viết theo tiêu đề"
          onChange={e => handleSearchChange(e.target.value)} 
          style={{ width: 400 }} 
        />
      </Header>
      <Content style={{ padding: '20px' }}>
        <InfiniteScroll
          dataLength={posts.length}
          next={loadMorePosts} 
          hasMore={hasMore}
          loader={<Skeleton active />}
          endMessage={
            <div style={{
              textAlign: 'center',
              padding: '20px',
              fontSize: '16px',
              color: '#999',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
              <SmileOutlined style={{ fontSize: '24px', color: '#1890ff', marginBottom: '8px' }} />
              <p>Đã tải hết bài viết</p>
            </div>
          }
        >
          <List
            itemLayout="vertical"
            size="large"
            dataSource={posts}
            renderItem={post => {
              const isExpanded = expandedPostIds.includes(post._id);
              return (
                <PostCard
                  post={post}
                  users={users}
                  comments={comments}
                  toggleComments={toggleComments}
                  isExpanded={isExpanded}
                />
              );
            }}
          />
        </InfiniteScroll>
      </Content>
    </Layout>
  );
};

export default PostList;
