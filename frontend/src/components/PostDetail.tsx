import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../redux/store';
import { Card, Typography, Divider, Avatar, Spin, Layout, List } from 'antd';
import { Comment } from '../types/commentType'; 

const { Title, Paragraph } = Typography;
const { Header, Content } = Layout;

const PostDetail: React.FC = () => {
  const { _id } = useParams<{ _id: string }>();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const users = useSelector((state: RootState) => state.users.users);
  const comments = useSelector((state: RootState) => state.comments.comments); 

  const post = posts.find(post => post._id.toString() === _id);
  const user = post ? users.find(user => user._id.toString() === post.owner) : null;
  const postComments = comments.filter((comment: Comment) => comment.post === post?._id);

  if (!post) {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ backgroundColor: '#1890ff', color: '#fff', display: 'flex', alignItems: 'center', paddingLeft: 100, paddingRight: 100 }}>
          <Avatar src="https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png" style={{ marginRight: 10 }} />
          <Title level={3} style={{ color: '#fff', margin: 0 }}>Blog</Title>
        </Header>
        <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Spin size="large" tip="Đang tải bài viết..." />
        </Content>
      </Layout>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#1890ff', color: '#fff', display: 'flex', alignItems: 'center', paddingLeft: 100, paddingRight: 100 }}>
        <Avatar src="https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png" style={{ marginRight: 10 }} />
        <Title level={3} style={{ color: '#fff', margin: 0 }}>Blog</Title>
      </Header>
      <Content style={{ padding: '10px' }}>
        <Card style={{ margin: '20px 200px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
          <Title level={2} style={{ color: '#2c3e50' }}>{post.title}</Title>
          <Divider />
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Avatar src="https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png" style={{ marginRight: 10 }} />
            <span>
              <strong>Người đăng: </strong> {user?.name || 'Không rõ'} &nbsp;
              <strong>Ngày đăng: </strong> {new Date(post.created_at).toLocaleDateString()}
            </span>
          </div>
          <Divider />
          <Paragraph style={{ fontSize: 18, lineHeight: 1.6 }}>{post.content}</Paragraph>
          
          <Divider />
          <Title level={4}>Bình luận ({postComments.length})</Title>
          <List
            dataSource={postComments}
            renderItem={comment => (
              <List.Item key={comment._id}>
                <List.Item.Meta
                  avatar={<Avatar src="https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png" />}
                  title={users.find(user => user._id === comment.owner)?.name || 'Không rõ'}
                  description={comment.content}
                />
              </List.Item>
            )}
          />
        </Card>
      </Content>
    </Layout>
  );
};

export default PostDetail;
