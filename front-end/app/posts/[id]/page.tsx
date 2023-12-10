import Post from "@/components/Post";

type Props = {
	params: {
		id: string;
	};
};

export default async function PostDetails({ params }: Props) {
	const post = await getPost(params.id);

	return (
		<main className="container mt-3">
			<Post {...post} createdAt={new Date()} collapse={false} />
		</main>
	);
}

async function getPost(id: string) {
	try {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}
		return res.json();
	} catch (error) {
		console.error(error);
	}
}
