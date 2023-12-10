import React from "react";
import Comment from "./Comment";

type Post = {
	id: number;
	userId: number;
	title: string;
	body: string;
	createdAt: Date;
};

function Post({ id, userId, title, body, createdAt }: Post) {
	return (
		<article>
			<h1 className="text-center">{title}</h1>
			<div className="d-flex flex-column">
				<span>Author: {userId}</span>
				<span>{`Created at: ${createdAt.toLocaleDateString()}`}</span>
			</div>
			<p className="my-3">{body}</p>
			<div>
				<span
					className="text-secondary"
					role="button"
					data-bs-toggle="collapse"
					data-bs-target="#commentContainer"
					aria-expanded="false"
					aria-controls="commentContainer"
				>
					<em>2 replies</em>
				</span>
				<hr />
				<div className="collapse py-2" id="commentContainer">
					<div className="d-flex flex-column gap-4">
						<Comment />
						<Comment />
						<Comment />
					</div>
				</div>
			</div>
		</article>
	);
}

export default Post;
