import type { Post } from "./postsSlice";

export const fetchPosts = async () => {
	const response = await fetch("http://localhost:3000/posts", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	const result: Post[] = await response.json();

	return result;
};
