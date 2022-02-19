import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getPosts } from 'src/api/postApi';
import PostList from 'src/components/Elements/PostList';
import styles from './HomePage.module.less';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadFull, setIsLoadFull] = useState(false);

  const fetchData = async (currentPage) => {
    const resultApi = await getPosts({ _page: currentPage });
    if (resultApi && resultApi.status === 200) {
      if (resultApi?.data?.length === 0) {
        return setIsLoadFull(true);
      }
      setPosts([...posts, ...resultApi.data]);
    } else {
      message.error('Error !!!');
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleLoadMore = () => setCurrentPage(currentPage + 1);
  return (
    <div className={styles.pageWrapper}>
      <PostList data={posts} handleLoadMore={handleLoadMore} isLoadFull={isLoadFull} />
    </div>
  );
}
