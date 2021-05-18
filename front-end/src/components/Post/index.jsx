import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";
import {listPosts } from '../../actions/post'
import {listUsers } from '../../actions/user'
import './index.css'
import avatar from '../../images/avatar.jpg'
import LoadingBox from '../../config/LoadingBox';
import { listComments } from '../../actions/comment';

function Post() {
    const listPost = useSelector(state => state.listPost);
    const listUser = useSelector(state => state.listUser);
    const listComment = useSelector(state => state.listComment);
    const {posts,loading} = listPost;
    const {users} = listUser;
    const {comments,loadingComments} = listComment;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listPosts())
        dispatch(listUsers())
        dispatch(listComments())
        return () => {
        };
    }, [dispatch])
    let lenComment = new Array(posts.length).fill(0);
    comments.forEach((c) => {
        lenComment[c["postId"] - 1]++;
    });
    return (
        <>
        {loading?(
            <LoadingBox></LoadingBox>
        ):(   
            posts.map((post) => (
                <div className="container post">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h2 className="text-xs-center post-title">
                                {post.title}
                            </h2>
                        </div>
                    </div>
                    <div className="post-header">
                        <div className="post-author">
                            <p>
                                Author:
                                {users.map((user) => {
                                    if (post.userId === user.id)
                                        return user.name;
                                })}
                            </p>
                            <p>
                                Create at: 18/5/2021
                            </p>
                        </div>
                    </div>
                    <div className="post-content">{post.body.substr(0, 100)}</div>
                    <div className="post-comment">
                        <p>
                            <button
                                 className="btn btn-primary"
                                 type="button"
                                 data-toggle="collapse"
                                 data-target={"#collapseExample" + post.id}
                                 aria-expanded="false"
                                 aria-controls="collapseExample"
                            >
                                Comment ({lenComment.shift()})
                            </button>
                        </p>
                        <div className="collapse" id={"collapseExample" +post.id} >
                            <div className="card card-body">
                            {loadingComments?(<LoadingBox></LoadingBox>):(
                                 comments.map((comment) => {
                                    if (post.id === comment.postId) {
                                        return (
                                            <>
                                            <div className="header-comment">
                                                <img src={avatar} alt="avatar" />
                                                <h5>{comment.name}</h5>
                                                 <p>6 minutes ago</p>
                                            </div> 
                                             <p>{comment.body}</p>
                                            </>
                                            
                                        )
                                    }
                                })
                            )}
                            </div>
                        </div>
                    </div>
                    <hr className="post-line"></hr>
                </div>
                
            ))

        )}
       
    </>
    )
}

export default Post
