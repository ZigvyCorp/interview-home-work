"use client";

import Post from "@/components/Post";
import { useEffect, useRef, useState } from "react";
import { useGetPostBatchQuery } from "@/lib/features/api/apiSlice";
import type { PostData } from "@/types";
import { DEFAULT_POST_BATCH_SIZE } from "@/constants";

export default function Home() {
	const [offset, setOffset] = useState<number>(0);
	const [posts, setPosts] = useState<PostData[]>([]);

	const { data: postBatch, isLoading } = useGetPostBatchQuery({
		batchSize: DEFAULT_POST_BATCH_SIZE,
		offset,
	});

	useEffect(() => {
		if (!isLoading && postBatch.data.length > 0) {
			setPosts(posts.concat(postBatch.data));
		}
	}, [postBatch]);

	const observerTarget = useRef<HTMLDivElement>(null);

	if (!isLoading && !postBatch.hasNext) {
		if (observerTarget.current) {
			observerTarget.current.classList.add("d-none");
		}
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setOffset((prevOffset) => prevOffset + 1);
				}
			},
			{ threshold: 0 }
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
			{posts.map((post: PostData) => (
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
