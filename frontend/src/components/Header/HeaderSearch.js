import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Input } from 'antd';

const HeaderSearch = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchStr, setSearchStr] = useState("");

    const q = queryString.parse(location.search).q;
    useEffect(() => {
        setSearchStr(q);
    }, [q]);

    const handleSearch = () => {
        navigate(`/search?q=${searchStr}`);
    };

    return (
        <Input.Search
            style={{ maxWidth: "400px" }}
            value={searchStr}
            onChange={(e) => setSearchStr(e.target.value)}
            onSearch={handleSearch}
            placeholder='Enter post title'
            enterButton
        />
    );
};

export default HeaderSearch;