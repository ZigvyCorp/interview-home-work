import React from 'react';

const Reply = ({ comment }) => {
	return (
		<>
			<div className='m-4'>
				<img
					src='https://res.cloudinary.com/lampt/image/upload/v1620639420/utils/avatar_cugq40_jnf6l1.png'
					alt=''
					style={{ width: '50px', height: '50px', borderRadius: '50%' }}
				/>
				<span className='p-2 text-danger'>{comment.user.username}</span>
				<span className='text-secondary'>a day ago</span>
				<div style={{ marginLeft: '56px' }}>
					<div>{comment.content}</div>
					<button className='reply-button text-secondary'>Reply to</button>
				</div>
			</div>
		</>
	);
};

export default Reply;
