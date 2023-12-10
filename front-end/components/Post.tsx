import { useState, useEffect } from "react";
import Comment from "./Comment";
import Link from "next/link";

type Props = {
	id: number;
	userId: number;
	title: string;
	body: string;
	createdAt: Date;
	collapse: Boolean;
};

type PostComment = {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
};

type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
} | null;

function Post({ id, userId, title, body, createdAt, collapse = true }: Props) {
	const [comments, setComments] = useState([]);
	const [author, setAuthor] = useState<User>(null);
	useEffect(() => {
		if (id === 0) {
			return;
		}

		async function fetchComments(postId: number) {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
			);

			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}

			const _comments = await res.json();
			setComments(_comments);
		}

		async function fetchAuthorDetails(id: number) {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/users/${id}`
			);

			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}

			const _author: User = await res.json();
			setAuthor(_author);
		}

		fetchComments(id);
		fetchAuthorDetails(userId);
	}, [id]);

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
				<span>Author: {author?.name ?? ""}</span>
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
				<div
					className={`collapse ${collapse ? "" : "show"} py-2`}
					id={`commentContainer-${id}`}
				>
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

export default Post;
