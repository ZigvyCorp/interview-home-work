import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import PostSummary from "./PostSummary";

const HomePage = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div>
            {posts.map((post) => (
                <PostSummary key={post.id} post={post} />
            ))}
        </div>
    );
};

export default HomePage;
