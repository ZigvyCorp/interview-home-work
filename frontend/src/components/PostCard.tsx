import React from 'react';
import { List, Button, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { Comment } from '../types/commentType';
import { User } from '../types/userType';
import { Post } from '../types/postType';

interface PostCardProps {
  post: Post;
  users: User[];
  comments: Comment[];
  toggleComments: (postId: string) => void;
  isExpanded: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, users, comments, toggleComments, isExpanded }) => {
  const postComments = comments.filter(comment => comment.post === post._id);
  
  return (
    <List.Item
      key={post._id}
      actions={[
        <span onClick={() => toggleComments(post._id)} style={{ cursor: 'pointer' }}>
          {isExpanded ? 'Ẩn bình luận' : `${postComments.length} bình luận`}
        </span>
      ]}
      style={{
        border: '1px solid #f0f0f0',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        marginRight: '100px',
        marginLeft: '100px',
        backgroundColor: '#fff',
        transition: 'all 0.3s',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
      
    >
      <List.Item.Meta
        avatar={<Avatar src="https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png" />}
        title={<Link to={`/posts/${post._id}`}>{post.title}</Link>}
        description={`Bởi ${users.find(user => user._id === post.owner)?.name || 'Không rõ'} vào ${new Date(post.created_at).toLocaleDateString()}`}
      />
      <p>{post.content.substring(0, 100)}...<Button type="link">
        <Link to={`/posts/${post._id}`}>Đọc thêm</Link>
      </Button></p>
      

      {isExpanded && (
        <div style={{ marginTop: 10 }}>
          {postComments.map(comment => (
            <div key={comment._id} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
              <Avatar src="https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png" />
              <p style={{ marginLeft: 8 }}>
                <strong>{users.find(user => user._id === comment.owner)?.name || 'Không rõ'}:</strong> {comment.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </List.Item>
  );
};

export default PostCard;
