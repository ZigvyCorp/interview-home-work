import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header/Header';
import Posts from './Components/Posts';
import Pagination from './Components/Pagination';

const App = () => {
	const [data, setData] = useState({
		posts: [],
		users: [],
		comments: [],
	});

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);
	const [loading, setLoading] = useState(true);

	//Fetch data
	useEffect(() => {
		const fetchData = async () => {
			const [posts, users, comments] = await Promise.all([
				await axios.get('https://jsonplaceholder.typicode.com/posts'),
				await axios.get('https://jsonplaceholder.typicode.com/users'),
				await axios.get('https://jsonplaceholder.typicode.com/comments'),
			]);

			setData({
				posts: posts.data,
				users: users.data,
				comments: comments.data,
			});
			setLoading(false);
		};
		fetchData();
	}, []);

	//Pagination
	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;

	//get the current posts
	const currentPosts =
		data.posts.length > 0
			? data.posts.slice(firstPostIndex, lastPostIndex)
			: [];

	const paginate = pageNumber => setCurrentPage(pageNumber);
	return (
		<div className="mx-6 shadow p-2 mb-5 bg-body rounded">
			<Header />
			<Posts loading={loading} currentPosts={currentPosts} data={data} />
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={data.posts.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default App;
