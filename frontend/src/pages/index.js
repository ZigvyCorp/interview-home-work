import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Post from '../components/Post';
import LoadIcon from '../images/loading.gif';
import { POST_TYPES } from '../redux/actions/post.action';

const Home = () => {
	const { post } = useSelector((state) => state);
	const dispatch = useDispatch();
	const [load, setLoad] = useState(false);
	const [limit, setLimit] = useState(0);
	const [isLoadMore, setIsLoadMore] = useState(1);
	const pageEnd = useRef();

	//Fetch post
	useEffect(() => {
		const fetchPost = async () => {
			setLoad(true);
			try {
				if (isLoadMore > 1) {
					const res = await axios.get(`/posts?limit=${limit}`);
					dispatch({ type: POST_TYPES.GET_POST, payload: res.data.posts });
					setLoad(false);
					setIsLoadMore(1);
				}
			} catch (error) {
				console.log(error.response.data.msg);
			}
		};
		fetchPost();
	}, [isLoadMore, dispatch, limit]);

	//Load more
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsLoadMore((p) => p + 1);
					loadMore();
				}
			},
			{
				threshold: 1
			}
		);
		observer.observe(pageEnd.current);
	}, [setIsLoadMore]);

	//
	const loadMore = () => {
		setLimit((limit) => limit + 3);
	};
	return (
		<div>
			{post.posts.map((post) => (
				<Post post={post} key={post.id} />
			))}
			{load && (
				<img src={LoadIcon} alt='loading' className='d-block mx-auto mt-2' />
			)}
			<button className='loadMore-btn' ref={pageEnd}>
				LoadMore
			</button>
		</div>
	);
};

export default Home;
