import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { List, Pagination } from 'antd';

import useClassNames from '../../hooks/useClassName';
import styles from './Posts.module.css';
import PostItem from '../PostItem/PostItem';
import SearchComponent from '../SearchComponent';

const Posts = () => {
    // Custom hook for handling CSS class names
    const cx = useClassNames(styles);

    // Redux selector to get the search text from the state
    const searchText = useSelector((state) => state.search) || '';

    // Redux selector to get the list of posts from the state
    const listPost = useSelector((state) => state.posts.posts);

    // Filter the list of posts based on the search text
    const listPostFiltered = listPost.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase()),
    );

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage < 0 ? 1 : indexOfLastPost - postsPerPage;
    // // Extract the current posts to display on the current page
    const currentPosts = listPostFiltered.slice(indexOfFirstPost, indexOfLastPost);

    const handleChangePage = (id) => {
        setCurrentPage(id);
    };

    return (
        <div className={cx('posts-list')}>
            <div className={cx('container')}>
                <SearchComponent />
                <List
                    className={cx('list')}
                    size="large"
                    bordered
                    dataSource={currentPosts}
                    renderItem={(item) => <PostItem short className={cx('post-item')} item={item} />}
                />
                <Pagination
                    className={cx('pagination')}
                    defaultCurrent={currentPage}
                    total={listPostFiltered.length}
                    defaultPageSize={postsPerPage}
                    onChange={(id) => handleChangePage(id)}
                />
            </div>
        </div>
    );
};

export default memo(Posts);
