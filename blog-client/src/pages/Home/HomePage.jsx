import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadPosts } from "../../reducers/postReducer";
import "./HomePage.scss";
import PostPagination from "./PostPagination";
import PostSearch from "./PostSearch";
import PostItem from "./PostItem";

const HomePage = () => {
	const dispatch = useDispatch();
	const { posts = [] } = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(startLoadPosts());
	}, [dispatch]);

	return (
		<div className="home-page">
			<PostSearch
				className="home-page__search-posts"
			/>
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
			<PostPagination />
		</div>
	);
};

export default HomePage;
