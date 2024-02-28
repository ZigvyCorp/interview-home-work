import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetail } from 'src/store/reducer/UserReducer/action.js';
import UserReducer from 'src/store/reducer/PostReducer/reducer.js';
import styled from '@emotion/styled';
import Card from 'src/components/Card/index.jsx';
import Image from 'src/components/Image/index.jsx';


const Container = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;

`

function UserPost() {
    const { userId } = useParams()
    const { userDetail } = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDetail(userId))
    }, [dispatch, userId]);

    if (!userDetail?.posts?.length || userDetail?.posts?.length === 0) {
        return <Image src={'https://i.pinimg.com/originals/49/e5/8d/49e58d5922019b8ec4642a2e2b9291c2.png'}/>
    }

    return (
        <Container>
            {userDetail?.posts?.map((post, index) => (
                <Card id={post.id} comments={post.comments} user={userDetail} title={post.title} key={index}>
                    {post.body.length > 100 ? post.body.slice(0, 100) + '...' : post.body}
                </Card>
            ))}
        </Container>
    )
}

export default UserPost
