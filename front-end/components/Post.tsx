import { useState, useEffect } from "react";
import Comment from "./Comment";
import Link from "next/link";
import type { PostComment, User } from "@/types";
import { useGetUserDetailsQuery } from "@/lib/features/api/apiSlice";

type Props = {
	id: number;
	userId: number;
	title: string;
	body: string;
	createdAt: Date;
	type: "summary" | "detail";
};

function Post({ id, userId, title, body, createdAt, type }: Props) {
	const [comments, setComments] = useState([]);

	const { data: author } = useGetUserDetailsQuery(userId);

	useEffect(() => {
		if (id === 0) {
			return;
		}

		async function fetchComments(postId: number) {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/${postId}/comments`
			);

			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}

			const data = await res.json();
			setComments(data);
		}

		fetchComments(id);
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
				<span>Author: {author?.username ?? ""}</span>
				<span>{`Created at: ${createdAt.toLocaleDateString()}`}</span>
			</div>
			<p className="my-3">
				{type === "summary" && body.length > 100
					? body.slice(0, 99) + "..."
					: body}
			</p>
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
					className={`collapse ${
						type === "detail" ? "show" : ""
					} py-2`}
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
