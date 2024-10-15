import { Skeleton } from "antd";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Posts from "../../components/Posts/Posts";
import { commentActions } from "../../features/comment/commentSlice";
import {
    postActions,
    selectPostList,
    selectPostLoading,
} from "../../features/post/postSlice";
import { userActions } from "../../features/user/userSlice";
import "./Home.scss";
const Home = () => {
    const dispatch = useAppDispatch();
    const postList = useAppSelector(selectPostList);
    const postLoading = useAppSelector(selectPostLoading);
    useEffect(() => {
        function fetchData() {
            dispatch(postActions.fetchPostList());
            dispatch(userActions.fetchUserList());
            dispatch(commentActions.fetchCommentList());
        }
        fetchData();
    }, []);
    return (
        <div className="home">
            {postLoading ? <Skeleton /> : <Posts postList={postList} />}
        </div>
    );
};

export default Home;
