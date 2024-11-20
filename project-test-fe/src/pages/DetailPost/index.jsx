import React, { useEffect } from 'react';
import BodyPost from "../../components/Body";
import { getPostsRequestDetail, getCommentRequestDetail } from "../../actions";
import { useDispatch, useSelector } from 'react-redux'
import {getPostDetail, getCommentDetail} from '../../selectors';
import {useParams} from "react-router-dom";
import './styles.scss';

const DetailPost = (props) => {

    const dispatch = useDispatch();
    const data = useSelector(getPostDetail);
    const dataComment = useSelector(getCommentDetail);
    let { id } = useParams();

    useEffect(() => {
        if(id) {
            dispatch(getPostsRequestDetail(id));
            dispatch(getCommentRequestDetail(id));
        }
    }, [id]);

    return (
        <div className="detail-post">
            <BodyPost data={[data.items]} dataUser={[]} dataComment={dataComment?.items} mode='detail' />
        </div>
    )
}

export default DetailPost;