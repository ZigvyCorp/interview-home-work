"use client";

import Post from "@/components/Post";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from 'next/navigation'

type BlogPost = {
	id: number;
	userId: number;
	title: string;
	body: string;
	createdAt: Date;
};

export default function Search() {
    const searchParams = useSearchParams();

    const keyword = searchParams.get('keyword');
	const batchSize = 5;
	const [posts, setPosts] = useState([]);
	const [offset, setOffset] = useState(1);
	const observerTarget = useRef<HTMLDivElement>(null);

	useEffect(() => {
		async function fetchPosts() {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts?keyword=${keyword}`
			);

			if (!res.ok) {
				throw new Error("Failed to fetch data");
			}

			let data = await res.json();
			console.log("🚀 ~ fetchPosts ~ data:", data)

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
            <h1>Results for: {keyword}</h1>
			{posts.map((post: BlogPost) => (
				<Post
					key={post.id}
					{...post}
					createdAt={new Date()}
					type="summary"
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
