import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetail } from 'src/store/reducer/PostReducer/action.js';
import CardDetail from 'src/components/Card/CardDetail.jsx';
import Image from '../../components/Image/index.jsx';

const DetailContainer = styled.div`

`

const PostDetailPage = () => {
    const { postId } = useParams()
    const dispatch = useDispatch()
    const { postDetail } = useSelector(state => state.PostReducer)

    useEffect(() => {
        dispatch(getPostDetail(postId))
    }, [dispatch, postId])


    if (!postDetail?.id) {
        return <Image src={'https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png'}/>
    }

    return (
        <DetailContainer>
            <CardDetail
                id={postDetail?.id}
                comments={postDetail?.comments}
                user={postDetail?.user}
                title={postDetail?.title}
            >
                {postDetail?.body}
            </CardDetail>
        </DetailContainer>
    )
};

export default PostDetailPage;
