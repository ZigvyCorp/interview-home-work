import { Dropdown } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useState, useEffect } from 'react';
import PostSearchItem from '../PostSearchItem/PostSearchItem';
import { connect } from 'react-redux';
import debounce from 'debounce';
import { fetchPostSearchRequest } from '../../Services/postSearchAction';
const PostSearchInput = ({ loading, error, postsSearch, fetchPostSearch }) => {
    const [keyword, setKeyword] = useState("");
    useEffect(() => {
        if (keyword.trim() != "") fetchPostSearch(keyword)
    }, [fetchPostSearch, keyword]);

    const items = postsSearch?.map((post, index) => ({
        label: <PostSearchItem data={post} key={index} />,
        key: index,
    })
    );
    const debouceSearch = debounce((e) => setKeyword(e.target.value), 300)

    return (
        <Dropdown
            menu={{
                items,
            }}
            trigger={['hover']}
        >
            <Search style={{ width: 500, marginBottom: 10 }} defaultValue={keyword} onChange={debouceSearch} placeholder="Input tilte" enterButton="Search" loading={loading} />

        </Dropdown>
    );
}
const mapStateToProps = (state) => ({
    loading: state.postSearch.loading,
    error: state.postSearch.error,
    postsSearch: state.postSearch.data,
})
const mapDispatchToProps = {
    fetchPostSearch: fetchPostSearchRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(PostSearchInput);
