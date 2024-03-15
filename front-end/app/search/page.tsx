"use client";

import Post from "@/components/Post";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { DEFAULT_POST_BATCH_SIZE } from "@/constants";
import { useGetPostBatchQuery } from "@/lib/features/api/apiSlice";
import type { PostData } from "@/types";

export default function Search() {
	const searchParams = useSearchParams();

	const keyword = searchParams.get("keyword");
	const [offset, setOffset] = useState<number>(0);
	const [posts, setPosts] = useState<PostData[]>([]);
	const observerTarget = useRef<HTMLDivElement>(null);

	const { data: postBatch, isLoading } = useGetPostBatchQuery({
		keyword,
		batchSize: DEFAULT_POST_BATCH_SIZE,
		offset,
	});

	useEffect(() => {
		if (!isLoading && postBatch.data.length > 0) {
			setPosts(posts.concat(postBatch.data));
		}
	}, [postBatch]);

	if (!isLoading && !postBatch.hasNext) {
		if (observerTarget.current) {
			observerTarget.current.classList.add("d-none");
		}
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
                    if (postBatch?.hasNext) {
                        setOffset((prevOffset) => prevOffset + 1);
                    }
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
			<h1>Results for: {keyword}</h1>
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
