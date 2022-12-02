import './HomePage.scss';
import {
	postActions,
	selectLoadingPostList,
	selectPostList,
	selectPostListPage,
} from 'features/PostList/postListSlice';
import { FunctionComponent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import PostItem from '../../features/PostList/postItem';
import { Pagination } from 'antd';

const HomePage: FunctionComponent = () => {
	const posts = useAppSelector(selectPostList);
	const isLoadingPostList = useAppSelector(selectLoadingPostList);
	const page = useAppSelector(selectPostListPage)
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(postActions.fetchPostList(page));
	}, [dispatch]);


	return (
		<div className='post-list'>
			{!isLoadingPostList && posts.length > 0 && (
				<>
					{posts.map((post, index) => {
						return <PostItem key={index} post={post} />
					})}
					<div className='post-list__pagination'>
						<Pagination current={page} simple={true} total={100} onChange={(page) => dispatch(postActions.fetchPostList(page))} />
					</div>
				</>
			)}
		</div>
	);
};

export default HomePage;
