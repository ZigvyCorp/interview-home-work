import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";
import { GET_ALL_COMMENTS_SAGA, GET_ALL_POSTS_SAGA } from "../../redux/types/PostType";

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: GET_ALL_POSTS_SAGA });
		dispatch({ type: GET_ALL_COMMENTS_SAGA });
	}, []);
	const { allPosts, comments } = useSelector((state) => state.PostReducer);

	const renderBlogCard = () => {
		return allPosts?.map((post, index) => {
			let postComments = comments.filter((comment) => comment.postId === post.id);
			return (
				<Col md={{ span: 24 }} lg={{ span: 12 }} key={index}>
					<div className="my-5">
						<BlogCard postComments={postComments} post={post} />
					</div>
				</Col>
			);
		});
	};
	return (
		<div>
			<Row>{renderBlogCard()}</Row>

			<Outlet />
		</div>
	);
}
