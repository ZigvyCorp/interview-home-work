import type { Post } from "./postsSlice";

export const fetchPosts = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	const result: Post[] = await response.json();

	return result;
};
