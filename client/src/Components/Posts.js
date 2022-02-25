import React from 'react';
import Comment from './Comment';

const Posts = props => {
	if (props.loading) return <h2>Loading...</h2>;

	function randomDate(start, end) {
		const date = new Date(
			start.getTime() +
				Math.random() * (end.getTime() - start.getTime())
		);
		return new Intl.DateTimeFormat('vi-VN').format(date);
	}

	const findUsername = id => {
		const user = props.data.users.find(user => user.id === id);

		return user.name;
	};

	return (
		<React.Fragment>
			{props.currentPosts.map(data => (
				<div
					key={data.id}
					className="my-5 border-bottom border-dark"
				>
					<div className="text-center my-3">
						<h1>{data.title.slice(0, 15)}</h1>
					</div>
					<div className="d-flex justify-content-end align-items-center">
						<div className="my-4 me-auto text-start">
							<h4>Author: {findUsername(data.userId)}</h4>
							<h4>
								Created at:{' '}
								{randomDate(new Date(2018, 0, 1), new Date())}
							</h4>
						</div>
						<div>Hello</div>
					</div>
					<p className="mb-5">{data.body.slice(0, 100)}</p>
					<Comment
						postId={data.id}
						comments={props.data.comments}
					/>
				</div>
			))}
		</React.Fragment>
	);
};

export default Posts;
