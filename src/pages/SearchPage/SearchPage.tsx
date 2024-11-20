import './SearchPage.scss';
import {
	postActions,
	selectLoadingPostList,
	selectPostList,
} from 'features/PostList/postListSlice';
import { FunctionComponent, useEffect } from 'react';
import { Divider, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import PostItem from '../../features/PostList/postItem';
import { useParams } from 'react-router-dom';
const { Text, Title } = Typography;

const SearchPage: FunctionComponent<any> = () => {
	const posts = useAppSelector(selectPostList);
	const isLoadingPostList = useAppSelector(selectLoadingPostList);
	const dispatch = useAppDispatch();

	const { keyword } = useParams();

	useEffect(() => {
		if (!keyword) return;
		dispatch(
			postActions.fetchSearchPostList({
				q: keyword,
				_embed: 'comments',
			})
		);
	}, [dispatch, keyword]);

	return (
		<>
			<div className='search-post'>
				<Title level={2} className='search-post__title'>
					Search: <Text className='search-post__keyword'>{keyword}</Text>
				</Title>
				<Divider />
				{!isLoadingPostList && (
					<div className='post-list'>
						{posts && posts.length > 0 ? (
							posts.map((post, index) => <PostItem key={index} post={post} />)
						) : (
							<Text className='no-post'>No post here</Text>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default SearchPage;
