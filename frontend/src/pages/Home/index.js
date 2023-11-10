import './style.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ListPost from '../../components/ListPost';
import { getPosts } from '../../store/post/actions';
import ButtonCreate from '../../components/ButtonCreate';
import CreatePostForm from '../../components/CreatePostForm';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts({ currentPage: 1, perPage: 2 }));
    }, [dispatch]);

    return (
        <div className='home'>
            <ButtonCreate />
            <ListPost />
            <CreatePostForm />
        </div>
    );
};

export default Home;