import React, { useState } from 'react';
import axios from 'axios';

import PostSearch from './PostSearch';

const InputSearch = () => {
	const [search, setSearch] = useState('');
	const [posts, setPosts] = useState([]);
	const [load, setLoad] = useState(false);

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!search) return;
		try {
			setLoad(true);
			const res = await axios.get(`search?title=${search}`);
			setPosts(res.data.posts);
		} catch (error) {
			console.log(error.response.data.msg);
		}
	};

	const handleClose = () => {
		setSearch('');
	};
	return (
		<div className='search'>
			<form className='d-flex' onSubmit={handleSearch}>
				<input
					className='form-control me-2'
					type='search'
					placeholder='Search'
					aria-label='Search'
					value={search}
					name='search'
					onChange={(e) => setSearch(e.target.value.replace(/ /g, ''))}
				/>
				<button className='btn btn-outline-success' type='submit'>
					Search
				</button>
			</form>

			<div className='posts_search'>
				{search &&
					posts?.map((post) => (
						<PostSearch post={post} handleClose={handleClose} key={post.id} />
					))}
			</div>
		</div>
	);
};

export default InputSearch;
