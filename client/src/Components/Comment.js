import React, { useState } from 'react';

const Comment = props => {
	const [showComments, setShowComments] = useState(false);

	//Find all comments on a specific list
	const commentsList = props.comments.filter(
		comment => comment.postId === props.postId
	);

	//Calculate total comments
	const totalComments = commentsList.length;

	//toggle comments on click
	const toggleComments = () => {
		setShowComments(!showComments);
	};

	return (
		<div className="my-5">
			<div className="border-primary border-bottom pb-3">
				<button
					className="fw-light border-0 text-secondary"
					onClick={toggleComments}
				>
					{totalComments} replies
				</button>
			</div>
			{showComments &&
				commentsList.map(cmt => (
					<div className="d-flex my-5">
						<img
							src="https://via.placeholder.com/600/92c952"
							alt="profile img"
							className="me-3 rounded-circle"
							style={{ width: '50px', height: '50px' }}
						></img>
						<div>
							<div className="d-flex pt-2">
								<p className="text-primary fs-6">{cmt.name}</p>
								<p className="mx-5 text-primary fs-6">
									{Math.floor(Math.random() * 5 + 2)} days ago
								</p>
							</div>
							<p>{cmt.body}</p>
							<p className=" text-primary">Reply to</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default Comment;
