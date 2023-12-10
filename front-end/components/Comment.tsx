import Image from "next/image";
import React from "react";

type PostComment = {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
};

function Comment({ id, postId, name, email, body }: PostComment) {
	return (
		<div className="d-flex gap-3">
			<div className="avatar-container">
				<Image src="/cat.png" alt="User" width={32} height={32} />
			</div>
			<div className="text-container d-flex flex-column">
				<div>
					<span className="me-2 text-secondary">{name}</span>
					<span className="text-body-tertiary">
						<small>a day ago</small>
					</span>
				</div>
				<p className="mb-1">{body}</p>
				<span className="text-secondary">
					<small>Reply to</small>
				</span>
			</div>
		</div>
	);
}

export default Comment;
