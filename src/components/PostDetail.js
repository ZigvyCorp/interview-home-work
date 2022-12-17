import React, { useEffect } from 'react';
import Layout from '../views/Layout';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommentList from './CommentList';
import { Tag } from 'antd';
import * as ACTION from '../redux/constants/constants';
import Moment from 'moment';
const tagsColor = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];
const PostDetail = () => {
    const params = useParams();
    const { postId } = params;
    const posts = useSelector(state => state.PostReducer.postList);
    const postDetails = posts.filter((post) => post.id === parseInt(postId));
    const own = useSelector(state => state.UserReducer.userList.find(user => user.id === postDetails[0]?.owner)) || null
    const name = (own?.name?.length > 0 ? own?.name : own?.username) || '';
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: ACTION.GET_POST });
        dispatch({ type: ACTION.GET_COMMENT });
        dispatch({ type: ACTION.GET_USER });
    }, [dispatch]);
    return (
        <Layout>
            <div className='post-title container'>
                <h3 className='text-center fs-1'>{postDetails[0] && postDetails[0]?.title}</h3>
                <div className="post-info ms-4">
                    <div className='row'>
                        <div className='col-6'>
                            <p><span className='post-author fw-bold'>Author: </span>{name}</p>
                            <p><span className='post-created-date fw-bold'>Create at: </span>{Moment(postDetails[0]?.created_at).format("ll")}</p>
                        </div>
                        <div className='col-6'>
                            {postDetails[0]?.tags.map((items, index) => {
                                return <Tag key={index} color={tagsColor[index]}>{items}</Tag>
                          
                            })}
                        </div>
                    </div>
                    <div className="post-desc">{postDetails[0] && postDetails[0]?.content}</div>
                    <CommentList postId={postDetails[0]?.id} authorName={name}></CommentList>
                </div>
            </div>
        </Layout>
    )
};

export default PostDetail;