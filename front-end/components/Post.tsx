import React from "react";
import Comment from "./Comment";
import Link from "next/link";

type BlogPost = {
	id: number;
	userId: number;
	title: string;
	body: string;
	createdAt: Date;
};

type PostComment = {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
};

async function Post({ id, userId, title, body, createdAt }: BlogPost) {
	const comments = await getComments(id);
	const author = await getAuthorDetails(userId);

	return (
		<article>
			<h1 className="text-center">
				<Link
					className="text-decoration-none text-dark"
					href={`/posts/${id}`}
				>
					{title}
				</Link>
			</h1>
			<div className="d-flex flex-column">
				<span>Author: {author.name}</span>
				<span>{`Created at: ${createdAt.toLocaleDateString()}`}</span>
			</div>
			<p className="my-3">{body}</p>
			<div>
				<span
					className="text-secondary"
					role="button"
					data-bs-toggle="collapse"
					data-bs-target={`#commentContainer-${id}`}
					aria-expanded="false"
					aria-controls={`commentContainer-${id}`}
				>
					<em>{`${comments.length} replies`}</em>
				</span>
				<hr />
				<div className="collapse py-2" id={`commentContainer-${id}`}>
					<div className="d-flex flex-column gap-4">
						{comments.map((comment: PostComment) => (
							<Comment key={comment.id} {...comment} />
						))}
					</div>
				</div>
			</div>
		</article>
	);
}

async function getComments(postId: number) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
	);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

async function getAuthorDetails(id: number) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default Post;
