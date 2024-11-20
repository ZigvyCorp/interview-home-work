import { Comment } from '@features/PostList/postListSlice';
import { Col, Row, Space } from 'antd';
import { FunctionComponent } from 'react';
import { Typography, Avatar } from 'antd';
import moment from 'moment';
import './comment.scss';
const { Text, Paragraph, Link } = Typography;

const CommentItem: FunctionComponent<{ comment: Comment }> = ({ comment }) => {
	const { body, email, createdAt } = comment;
	return (
		<>
			<Row className='comment' wrap={false}>
				<Col>
					<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
				</Col>
				<Col flex={1} className='comment-body' style={{ marginLeft: '1rem' }}>
					<Space direction='vertical'>
						<Row>
							<Space size={'middle'}>
								<Text className='comment-body__name'>{email}</Text>
								<Text className='comment-body__createdAt'>
									{moment(createdAt, 'DD/MM/YYYY').fromNow()}
								</Text>
							</Space>
						</Row>
						<Row>
							<Paragraph className='comment-body__content'>{body}</Paragraph>
						</Row>
						<Row>
							<Link>Replies to</Link>
						</Row>
					</Space>
				</Col>
			</Row>
		</>
	);
};
export default CommentItem;
