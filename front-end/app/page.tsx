import Post from "@/components/Post";

type Post = {
	id: number;
	userId: number;
	title: string;
	body: string;
	createdAt: Date;
};

export default async function Home() {
	const posts = await getPosts();

	return (
		<main className="container mt-3">
			{posts.map((post: Post) => (
				<Post key={post.id} {...post} createdAt={new Date()} />
			))}
		</main>
	);
}

async function getPosts() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}
