"use client";

import Post from "@/components/Post";
import { useEffect, useState } from "react";

type BlogPost = {
	id: number;
	userId: number;
	title: string;
	body: string;
	createdAt: Date;
};

export default function Home() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		async function fetchPosts() {
			const res = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);

			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}

			const _posts = await res.json();
			setPosts(_posts);
		}

		fetchPosts();
	}, []);

	return (
		<main className="container mt-3">
			{posts.map((post: BlogPost) => (
				<Post
					key={post.id}
					{...post}
					createdAt={new Date()}
					collapse={true}
				/>
			))}
		</main>
	);
}
