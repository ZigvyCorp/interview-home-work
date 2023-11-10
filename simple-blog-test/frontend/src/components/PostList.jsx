import { useSelector, useDispatch } from "react-redux";
import { getPostsFetch } from "../redux/postsSlice";
import { useEffect } from "react";
import PostItem from "./PostItem";
import Pagination from "./Pagination";

export default function PostList() {
    const { posts, isLoading, currentPage } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsFetch(currentPage));
    }, [dispatch, currentPage]);

    if (isLoading) {
        return <p className="container-md mt-3 fw-bold">Loading...</p>
    }

    return (
        <div className="container-md mt-3">
            {posts.map(post => (
                <PostItem key={post.post._id} data={post} />
            ))}
            <Pagination dispatch={dispatch} />
        </div>
    );
}