import PropTypes from 'prop-types';
import {Card, Button, Skeleton, List, Typography} from 'antd';
import {CommentOutlined} from '@ant-design/icons';
import CommentsSection from './CommentsSection';
import moment from 'moment';
import {useNavigate} from 'react-router-dom';

const {Text} = Typography;

const PostCard = ({
                      post, loading = false, visibleComments = {}, toggleComments = () => {
    }, getPostComments = () => []
                  }) => {
    const navigate = useNavigate();

    const formatDate = (timestamp) => {
        return moment(timestamp).format('DD/MM/YYYY, h:mm:ss a');
    };

    const handlePostClick = () => {
        navigate(`/posts/${post._id}`);
    };

    return (
        <Card
            style={{
                marginBottom: '20px',
                backgroundColor: '#fff',
                textAlign: 'center',
                margin: '0 auto',
                width: '80%',
            }}
            onClick={handlePostClick}
            hoverable
            actions={[
                <Button key={`comments-${post.id}`} type="link" icon={<CommentOutlined/>}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleComments(post.id);
                        }}>
                    {post.commentsCount} Comments
                </Button>,
            ]}
        >
            <Skeleton loading={loading} active>
                <List.Item.Meta
                    title={post.title}
                    description={
                        <>
                            <Text>by {post.authorName}</Text> -{' '}
                            <Text type="secondary"> {formatDate(post.created_at)}</Text>
                        </>
                    }
                />
                <Text>{post.content.substring(0, 100)}...</Text>
            </Skeleton>

            {visibleComments[post.id] && (
                <CommentsSection comments={getPostComments(post.id)}/>
            )}
        </Card>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
        created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        content: PropTypes.string.isRequired,
        commentsCount: PropTypes.number.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    visibleComments: PropTypes.objectOf(PropTypes.bool).isRequired,
    toggleComments: PropTypes.func.isRequired,
    getPostComments: PropTypes.func.isRequired,
};

PostCard.defaultProps = {
    loading: false,
    visibleComments: {},
};

export default PostCard;
