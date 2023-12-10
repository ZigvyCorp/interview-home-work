"use client";

import Post from "@/components/Post";
import { useEffect, useRef, useState } from "react";

type BlogPost = {
	id: number;
	userId: number;
	title: string;
	body: string;
	createdAt: Date;
};

export default function Home() {
	const batchSize = 5;
	const [posts, setPosts] = useState([]);
	const [offset, setOffset] = useState(1);
	const observerTarget = useRef<HTMLDivElement>(null);

	useEffect(() => {
		async function fetchPosts() {
			const res = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);

			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}

			let data = await res.json();

			if (data.length > batchSize * offset) {
				data = data.slice(0, batchSize * offset);
			} else {
				if (observerTarget.current) {
					observerTarget.current.classList.add("d-none");
				}
			}
			setPosts(data);
		}

		fetchPosts();
	}, [offset]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setOffset((prevOffset) => prevOffset + 1);
				}
			},
			{ threshold: 1 }
		);

		if (observerTarget.current) {
			observer.observe(observerTarget.current);
		}

		return () => {
			if (observerTarget.current) {
				observer.unobserve(observerTarget.current);
			}
		};
	}, [observerTarget]);

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
			<div className="d-flex justify-content-center">
				<div
					className="spinner-border"
					role="status"
					ref={observerTarget}
				>
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		</main>
	);
}
