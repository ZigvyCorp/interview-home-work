import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment/moment";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import PostComment from "../components/comment/PostComment";
import { fetchPost } from "../redux/actions/post.action";

const PostDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(( state ) => state.posts.post);

    useEffect(() => {
        dispatch(fetchPost({ id }));
    }, [ id, dispatch]);

    if(!post) return <Spin indicator={<LoadingOutlined spin />} fullscreen size="large" />

    return (
        <>
            <h2 className="post-content-title">
                {post.title}
            </h2>
            <div className="post-detail-container">
                <div className="post-detail-meta">
                    <p>Author: {post.author.name}</p>
                    <p>Email: {post.author.email}</p>
                    <p>Created At: {moment(new Date(post.createdAt)).format('MMM DD, YYYY')}</p>
                </div>
                <div className="post-detail-content">
                    <div className="post-detail-body">
                        {post.body}
                    </div>
                    <div className="post-detail-comment">
                        <h5>Comments:</h5>
                        <PostComment comments={post.comments}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostDetail;