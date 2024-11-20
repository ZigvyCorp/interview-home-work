import { FunctionComponent, useState } from 'react';
import CommentItem from 'components/comment/comment';
import { FakePost } from './postListSlice';
import { Col, Row, Tag } from 'antd';
import { Typography } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
import './postItem.scss';

const { Title, Paragraph, Text, Link } = Typography;

const PostItem: FunctionComponent<{ post: FakePost }> = ({ post }) => {
	const { title, id, author, createdAt, body, comments, tags } = post;
	const [isExpandedComment, setIsExpandComment] = useState(false);

	return (
		<div className='post-item'>
			<Row justify={'center'}>
				<Col>
					<RouterLink to={`/posts/${id}`}>
						<Title level={2} className='post-item__title'>
							{title}
						</Title>
					</RouterLink>
				</Col>
			</Row>
			<Row className='post-item__info'>
				<Col>
					<Row>
						<Text>Author: {author}</Text>
					</Row>
					<Row>
						<Text>Created at: {createdAt}</Text>
					</Row>
				</Col>
				<Col span={8}>
					<Row justify={'end'} style={{ rowGap: '8px' }}>
						{tags.map((tag, index) => {
							return (
								<Tag key={index} color='geekblue'>
									{tag}
								</Tag>
							);
						})}
					</Row>
				</Col>
			</Row>
			<Row className='post-item__body'>
				<Paragraph>{body.substring(0, 100).concat('...')}</Paragraph>
			</Row>
			<Row className='post-item__comment'>
				<Link onClick={() => setIsExpandComment(!isExpandedComment)}>
					{comments.length} replies
				</Link>
			</Row>
			<Row>
				{comments.length > 0 &&
					isExpandedComment &&
					comments.map((comment, index) => (
						<CommentItem key={index} comment={comment} />
					))}
			</Row>
		</div>
	);
};
export default PostItem;
