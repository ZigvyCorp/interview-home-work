// E:\zigvy\truong_2024_2\zigvy-interview-blog\frontend\src\components\CommentsSection.jsx
import PropTypes from 'prop-types';
import {Typography} from 'antd';
import moment from 'moment';

const {Text} = Typography;

const CommentsSection = ({comments}) => {
    const formatDate = (timestamp) => {
        return moment(timestamp).format('DD/MM/YYYY, h:mm:ss a');
    };

    return (
        <div style={{marginTop: '10px', textAlign: 'left'}}>
            {comments.map((comment) => (
                <div key={comment._id} style={{padding: '5px 0'}}>
                    <Text strong>{comment.ownerName}</Text>: {comment.content} <br/>
                    <Text type="secondary">{formatDate(comment.created_at)}</Text>
                </div>
            ))}
        </div>
    );
};

CommentsSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            ownerName: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created_at: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CommentsSection;
