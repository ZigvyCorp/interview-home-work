import { RootState } from "../../types/rootState.type";
import { useSelector } from "react-redux";
import { Post } from "../Post";
import { Spinner } from "..";

export const PostList = () => {
	const { posts } = useSelector((state: RootState) => state);
	if (posts.length === 0)
		return (
			<div className="d-flex justify-content-center align-items-center py-4">
				<Spinner />
			</div>
		);

	return (
		<div className="">
			{posts.map((post) => (
				<Post post={posts} key={post._id} />
			))}
		</div>
	);
};
