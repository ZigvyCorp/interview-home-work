import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as actions from "../store/actions"
import PostSection from '../containers/PostSection';

const PostDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getPostById(id));
    }, [dispatch, id]);
    return (
        <div>
            <PostSection isPostDetail />
        </div>
    )
}

export default PostDetail