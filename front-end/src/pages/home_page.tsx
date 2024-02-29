import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SearchPost from "../components/search_post";
import CardPost from "../components/card_post";
import Comments from "../components/comments";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes";

const HomePage = () => {
	const navigate = useNavigate();
	const post = useSelector((state: RootState) => state.post);
	const dispatch = useDispatch<AppDispatch>();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (post.posts.length === 0) {
			dispatch({ type: "FETCH_POST" });
		}
		if (inView && post.posts.length > 0) {
			var page = post.currentPage + 1;
			dispatch({
				type: "FETCH_NEXT_POST",
				payload: page,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch, inView]);
	return (
		<>
			<div className="flex flex-col gap-y-4 items-center justify-start">
				<div className="w-full flex justify-between items-center">
					<h4 className="text-3xl font-semibold">
						Homepage
					</h4>
					<SearchPost />
				</div>
				{post.posts.length > 0 ? (
					post.posts.map((postItem) => (
						<CardPost
							post={postItem}
							key={postItem.id}
							children={
								<>
									<Button	
										className="bg-[#4096ff] mb-4 hover:opacity-85"
										type="primary"
										size="large"
										onClick={() =>
											navigate(
												`${routePath.detailsPost.replace(
													"/:id",
													""
												)}/${
													postItem.id
												}`
											)
										}
									>
										Details
									</Button>
									<Comments
										postId={
											postItem.id
										}
									/>
								</>
							}
						/>
					))
				) : (
					<p className="text-center">
						There are no posts here...
					</p>
				)}
			</div>
			<div ref={post.posts.length > 2 ? ref : null}></div>
		</>
	);
};

export default HomePage;
