import React, { useState } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/posts/actions';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(fetchPosts(1, query)); // Adjust your action as needed
    };

    return (
        <Input.Search
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onSearch={handleSearch}
            placeholder="Search posts by title"
        />
    );
};

export default SearchBar;
