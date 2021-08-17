import React, { useState } from 'react';

import Reply from './Reply';

const Post = ({ post }) => {
	const [reply, setReply] = useState(false);
	const [readMore, setReadMore] = useState(false);

	return (
		<>
			<div style={{ borderBottom: '2px solid black', paddingBottom: '20px' }}>
				<h1 className='text-center'> {post.title}</h1>
				<div className='info'>
					<span className='text-info'>Author: Lam Pham</span>
					<br />
					<span className='text-info'>Created At: {post.created_at}</span>
				</div>
				<div className='mt-5 mb-5'>
					{post.content.length < 100
						? post.content
						: readMore
						? post.content + ' '
						: post.content.slice(0, 100) + '...'}
					{post.content.length > 100 && (
						<span onClick={() => setReadMore(!readMore)} className='readmore'>
							{readMore ? 'Hide content' : 'Read more'}
						</span>
					)}
				</div>
				<div className='reply'>
					<span onClick={() => setReply(!reply)} style={{ color: 'crimson' }}>
						{post.comment.length} replies
					</span>
					<hr />
				</div>

				{reply && post.comment.map((reply) => <Reply comment={reply} />)}
			</div>
		</>
	);
};

export default Post;
