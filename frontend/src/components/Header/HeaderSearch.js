import React from 'react';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const HeaderSearch = () => {
    const { Search } = Input;
    const navigate = useNavigate();

    const onSearch = (value) => {
        navigate(`/search?keyword=${value}`);
    };

    return (
        <Search
            allowClear
            size="large"
            onSearch={onSearch}
            style={{ maxWidth: "30%" }}
            placeholder="Enter your key word"
        />
    );
};

export default HeaderSearch;