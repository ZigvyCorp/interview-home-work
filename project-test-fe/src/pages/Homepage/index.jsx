import React, { useEffect } from 'react';
import BodyPost from "../../components/Body";
import { getPostsRequest, getUserRequest, getCommentRequest } from "../../actions";
import { useDispatch, useSelector } from 'react-redux'
import {getPostList, getUserList, getCommentList} from '../../selectors';
import './styles.scss';

const Homepage = (props) => {

    const dispatch = useDispatch();
    
    const data = useSelector(getPostList);
    const dataUser = useSelector(getUserList);
    const dataComment = useSelector(getCommentList);

    useEffect(() => {
        dispatch(getPostsRequest());
        dispatch(getUserRequest());
        dispatch(getCommentRequest())
    }, [dispatch]);

    return (
        <div className="homepage">
            <BodyPost data={data} dataUser={dataUser} dataComment={dataComment} />
        </div>
    )
}

export default Homepage;