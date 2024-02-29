import React from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/posts/postsSlice';
import type { SearchProps } from 'antd/es/input/Search';

export default function Search()
{
    const dispatch=useDispatch()
    const { Search } = Input;
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

    const [searchKey, setSearchKey]=React.useState<string>('')
    
    React.useEffect(()=>{
        dispatch(setSearchQuery(searchKey))
    },[searchKey])

    return (
        <Search  placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 'full' }} onChange={(e)=>setSearchKey(e.target.value)}/>
    )
}