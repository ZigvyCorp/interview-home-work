import { Outlet } from "react-router-dom";
import React, { useEffect } from "react";

import BlogCard from "../../components/BlogCard/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_COMMENTS_SAGA, GET_POST_BY_USERID_SAGA } from "../../redux/types/PostType";
import { USERID } from "../../utils/settingSystem";

export default function Home(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: GET_POST_BY_USERID_SAGA, userID: USERID });
		dispatch({ type: GET_ALL_COMMENTS_SAGA });
	}, []);

	const { posts, comments } = useSelector((state) => state.PostReducer);

	const renderMyBlog = () => {
		return (
			posts &&
			posts.map((post, index) => {
				let postComments = comments.filter((comment) => comment.postId === post.id);
				return (
					<div className="m-10" key={index}>
						<BlogCard postComments={postComments} post={post} />
					</div>
				);
			})
		);
	};

	return (
		<div>
			{renderMyBlog()}
			<Outlet />
		</div>
	);
}
