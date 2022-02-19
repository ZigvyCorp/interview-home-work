import { Spin } from 'antd';
import React, { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PostItem from './PostItem';
import styles from './PostList.module.less';

const PostList = ({ data = [], handleLoadMore, isLoadFull }) => {
  const loadMore = () => handleLoadMore();

  return (
    <div className={styles.postList}>
      <InfiniteScroll
        dataLength={data?.length}
        next={loadMore}
        hasMore={true}
        loader={isLoadFull ? <h3>load full</h3> : <Spin />}
      >
        {data?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default memo(PostList);
