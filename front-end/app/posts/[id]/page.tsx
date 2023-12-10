"use client";

import Post from "@/components/Post";
import { useEffect, useState } from "react";

type Props = {
	params: {
		id: string;
	};
};

type BlogPost = {
	id: number;
	userId: number;
	title: string;
	body: string;
};

export default function PostDetails({ params }: Props) {
	const [post, setPost] = useState<BlogPost>({
		id: 0,
		userId: 0,
		title: "",
		body: "",
	});
	useEffect(() => {
		async function fetchPost(id: string) {
			try {
				const res = await fetch(
					`https://jsonplaceholder.typicode.com/posts/${id}`
				);
				if (!res.ok) {
					throw new Error("Failed to fetch data");
				}
				const data = await res.json();
				setPost(data);
			} catch (error) {
				console.error(error);
			}
		}

		fetchPost(params.id);
	}, []);
	return (
		<main className="container mt-3">
			<Post {...post} createdAt={new Date()} collapse={false} />
		</main>
	);
}
