import React from 'react';
import PostList from '../components/PostList';
import SearchBar from '../components/SearchBar';

const HomePage = () => (
    <div>
        <SearchBar />
        <PostList />
    </div>
);

export default HomePage;
