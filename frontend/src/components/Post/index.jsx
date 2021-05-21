import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {listPosts } from '../../actions/post'
import {listUsers } from '../../actions/user'
import './index.css'
import { listComments } from '../../actions/comment';

function Post() {
    const listPost = useSelector(state => state.listPost);
    const listUser = useSelector(state => state.listUser);
    const listComment = useSelector(state => state.listComment);
    const {posts} = listPost;
    const {users} = listUser;
    const {comments} = listComment;
    const [page, setPage] = useState(1);
    const numberOfPage = 10;
    const pages = new Array(numberOfPage).fill(null).map((v, i) => i+1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listPosts(page))
        dispatch(listUsers())
        dispatch(listComments())
        return () => {
        };
    }, [dispatch,page])
   
    let lenComment = new Array(posts.length).fill(0);

    comments.forEach((c) => {
        lenComment[c["post"] - 1]++;
    });
   
    const gotoPrevious = () => {
        setPage(Math.max(0, page - 1));
      };
    
    const gotoNext = () => {
    setPage(Math.min(numberOfPage - 1, page + 1));
    };
    
    return (
                <>
                    {
                        posts.map((post) => (
                            <div className="container post">
                                <div className="row">
                                    <div className="col-md-6 offset-md-3 col-xs-12 ">
                                        
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
                                                if (String(post.owner) === String(user._id))
                                                    return user.name;
                                            })}
                                        </p>
                                        <p>
											Create at: {(post.created_at).toString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="post-content">{post.content}</div>
                                <div className="post-comment">
                                    <p>
                                        <button
                                             className="btn btn-primary"
                                             type="button"
                                             data-toggle="collapse"
                                             data-target={"#collapseExample" + post._id}
                                             aria-expanded="false"
                                             aria-controls="collapseExample"
                                        >
                                            Comment ({lenComment.shift()})
                                        </button>
                                    </p>
                                    <div className="collapse" id={"collapseExample" +post._id} >
                                        <div className="card card-body">
                                        {
                                             comments.map((comment) => {
                                                if (String(post._id) === String(comment.post)) {
                                                    return (
                                                        <>														
                                                         <p>{comment.content}</p>
                                                        </>
                                                    )
                                                }
                                            })
                                        }
                                        </div>
                                    </div>
                                </div>
                                <hr className="post-line"></hr>
                            </div>
                        ))}
                    <div className="col-md-12 pagination justify-content-center">
                    <button className="btn btn-primary" onClick={gotoPrevious}>Previous</button>
                    <button className="btn btn-primary" onClick={gotoNext}>Next</button>
                </div>  
            </>
    )
}

export default Post
