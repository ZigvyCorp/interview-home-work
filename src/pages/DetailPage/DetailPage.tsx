import './DetailPage.scss';
import {
	postActions,
	selectDetailPost,
	selectLoadingDetailPost,
} from 'features/PostList/postListSlice';
import { FunctionComponent, useEffect } from 'react';
import { Avatar, Typography, Space, Row, Divider, Tag } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CommentItem from 'components/comment/comment';
import { useParams } from 'react-router-dom';
const { Text, Title, Paragraph } = Typography;

const DetailPage: FunctionComponent = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams();
	const post = useAppSelector(selectDetailPost);
	const isLoadingDetail = useAppSelector(selectLoadingDetailPost);

	useEffect(() => {
		if (!id) return;
		dispatch(postActions.fetchDetailPost(id));
	}, [dispatch]);

	return (
		<>
			{!isLoadingDetail && post && (
				<>
					<Title className='post-title'>{post.title}</Title>
					<Row>
						<Space direction='horizontal' className='user-profile'>
							<Avatar src='https://joeschmoe.io/api/v1/random' />
							<Text className='post-author'>{post.author}</Text>
							<Divider type='vertical' />
							<Text className='post-author'>{post.createdAt}</Text>
						</Space>
					</Row>

					<Row className='post-body'>
						<Paragraph>{post.body}</Paragraph>
					</Row>
					<Row className='post-tag'>
						<Space>
							<Text>Tags: </Text>
							<Row justify={'end'} style={{ rowGap: '8px' }}>
								{post.tags.map((tag, index) => {
									return (
										<Tag key={index} color='geekblue'>
											{tag}
										</Tag>
									);
								})}
							</Row>
						</Space>
					</Row>
					<Row className='post-comment'>
						<Title className='post-comment__title' level={4}>
							{post.comments.length} replies
						</Title>
						{post.comments.length > 0 &&
							post.comments.map((comment, index) => (
								<CommentItem key={index} comment={comment} />
							))}
					</Row>
				</>
			)}
		</>
	);
};
export default DetailPage;
