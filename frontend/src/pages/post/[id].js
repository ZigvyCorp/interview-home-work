import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getSearchPost } from '../../redux/actions/post.action';
import Post from '../../components/Post';
import Reply from '../../components/Reply';

const DetailPost = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [postData, setPostData] = useState([]);
	const { post } = useSelector((state) => state);

	useEffect(() => {
		if (post.searchPost.every((post) => post.id !== Number(id))) {
			dispatch(getSearchPost({ id }));
		}
	}, [id, dispatch, post.searchPost]);

	useEffect(() => {
		const newData = post.searchPost.filter((post) => post.id === Number(id));
		setPostData(newData);
	}, [id, dispatch, post.searchPost]);

	// console.log(postData);

	return <h1>This is Detail Post</h1>;
};

export default DetailPost;
