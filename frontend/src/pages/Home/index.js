import './style.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchingPost, getPosts } from '../../store/post/actions';

import ListPost from '../../components/ListPost';
import ButtonCreate from '../../components/ButtonCreate';
import CreatePostForm from '../../components/CreatePostForm';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchingPost());
        dispatch(getPosts({ currentPage: 1, perPage: 4 }));
    }, [dispatch]);

    return (
        <div className='container'>
            <div className='home'>
                <ButtonCreate />
                <ListPost />
                <CreatePostForm />
            </div>
        </div>
    );
};

export default Home;