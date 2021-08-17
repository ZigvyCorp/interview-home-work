import React from 'react';
import { Link } from 'react-router-dom';

const PostSearch = ({ post, handleClose }) => {
	return (
		<div
			style={{
				borderBottom: '1px solid #eee',
				padding: '4px'
			}}
		>
			<Link
				to={`/post/${post.id}`}
				style={{ textDecoration: 'none' }}
				onClick={handleClose}
			>
				<h6 className='text-muted'> {post.title}</h6>
				<small>{post.content.slice(0, 40) + '...'}</small>
			</Link>
		</div>
	);
};

export default PostSearch;
