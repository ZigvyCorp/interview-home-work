import { useEffect } from "react";
import { Header, PostList } from "../../components";
import { getPosts } from "../../redux/actions/postActions";
import { useDispatch } from "react-redux";
import { getComments } from "../../redux/actions/commentActions";

export const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getPosts(dispatch);
		getComments(dispatch);
	}, [dispatch]);

	return (
		<>
			<Header />
			<PostList />
		</>
	);
};
