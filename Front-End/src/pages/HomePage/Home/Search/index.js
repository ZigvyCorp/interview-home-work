import React, { useState } from 'react'
import { Input, Space } from 'antd';
import { useDispatch } from 'react-redux';
const { Search } = Input;



export default function SearchBar() {
    const [keyword, setKeyword] = useState('');

    const actKeyWord = (keyWord) => {
        return {
            type: "@SEARCHSUCCESS",
            payload: keyWord,
        };
    };

    const dispatch = useDispatch();
    const handleOnChange = (e) => {
        const newKeyword = e.target.value;
        setKeyword(newKeyword);
        dispatch(actKeyWord(newKeyword));
    }

    const onSearch = (value) => {
        dispatch(actKeyWord(value));
    };

    return (
        <Space direction="vertical" className='my-5 mx-auto'>
            <Search placeholder="Search Title" onChange={handleOnChange} onSearch={onSearch} value={keyword} enterButton style={{ width: 650 }} />
        </Space>
    )
}
