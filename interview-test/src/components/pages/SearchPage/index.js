import { message } from 'antd';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { getPosts } from 'src/api/postApi';
import PostList from 'src/components/Elements/PostList';
import styles from './SearchPage.module.less';

export default function SearchPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadFull, setIsLoadFull] = useState(false);
  const [isNotFind, setIsNotFind] = useState(false);
  const { keyword } = queryString.parse(window.location.search);

  const searchPosts = async (keyword, currentPage) => {
    const resultApi = await getPosts({ title_like: keyword, _page: currentPage });
    if (resultApi && resultApi.status === 200) {
      if (resultApi?.data?.length === 0 && currentPage === 1) {
        return setIsNotFind(true);
      }
      if (resultApi?.data?.length === 0) {
        return setIsLoadFull(true);
      }
      setPosts([...posts, ...resultApi.data]);
    } else {
      message.error('Error !!!');
    }
  };

  useEffect(() => {
    searchPosts(keyword, currentPage);
  }, [keyword, currentPage]);

  const handleLoadMore = () => setCurrentPage(currentPage + 1);
  return (
    <div className={styles.pageWrapper}>
      <p>Search: {keyword}</p>
      {isNotFind ? (
        <h3>Not find post </h3>
      ) : (
        <PostList data={posts} handleLoadMore={handleLoadMore} isLoadFull={isLoadFull} />
      )}
    </div>
  );
}
