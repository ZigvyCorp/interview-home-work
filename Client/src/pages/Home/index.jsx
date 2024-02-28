import React, { useCallback, useContext, useEffect, useState } from 'react'
import LanguageContext from '../../context/TranslateContext.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getListPostsWithUser } from 'src/store/reducer/PostReducer/action.js';
import Card from 'src/components/Card/index.jsx';
import styled from '@emotion/styled';
import { Button } from 'antd';
import useLoading from 'src/hooks/useLoading.js';


const Container = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;

`

function Home() {
    const { postListWithUser: dataPost } = useSelector(state => state.PostReducer)
    const dispatch = useDispatch()
    let [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getListPostsWithUser(page));
    }, [dispatch, page]);

    const showMoreItem = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
            setPage(page => page + 1)
        }
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', showMoreItem);
        return () => window.removeEventListener('scroll', showMoreItem);
    }, [showMoreItem])

    return (
        <Container>
            {dataPost.data.map((post, index) => (
                <Card id={post.id} comments={post.comments} user={post.user} title={post.title} key={index}>
                    {post.body.length > 100 ? post.body.slice(0, 100) + '...' : post.body}
                </Card>
            ))}
        </Container>
    )
}

export default Home
