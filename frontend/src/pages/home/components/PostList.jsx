import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postConstants } from "../../../constants";
import { Post } from "./Post";
import { InfiniteScroll } from "../../../components/InfiniteScroll";
import { Empty, Skeleton } from "antd";

export const PostList = () => {
	const dispatch = useDispatch();
	const [trigger, setTrigger] = useState(false);
	const { data, keyword, loading, error, hasMore } = useSelector(
		(state) => state.post
	);

	const fetchMore = () => setTrigger((prev) => !prev);

	useEffect(() => {
		dispatch({
			type: postConstants.GET_POSTS_REQUEST,
			payload: { skip: data.length, keyword },
		});
	}, [trigger, keyword]);

	function getBody() {
		if (data.length)
			return data.map((post) => <Post key={post.id} post={post} />);
		if (!loading && !data.length) return <Empty className="mt-10" />;
	}

	return (
		<InfiniteScroll
			loader={<Loading />}
			loading={loading}
			fetchMore={fetchMore}
			hasMore={hasMore}
			dataLength={data.length}
			className="w-full h-full">
			{getBody()}
		</InfiniteScroll>
	);
};

const Loading = () => {
	return (
		<>
			<Skeleton
				active
				paragraph={{ rows: 5 }}
				rootClassName="border-y flex justify-around items-center h-96"
			/>
			<Skeleton
				active
				paragraph={{ rows: 5 }}
				rootClassName="border-y flex justify-around items-center h-96"
			/>
			<Skeleton
				active
				paragraph={{ rows: 5 }}
				rootClassName="border-y flex justify-around items-center h-96"
			/>
		</>
	);
};
