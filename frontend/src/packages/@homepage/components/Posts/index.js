import { React } from 'react';
import { Root } from './styled';
import container from './container';
import Post from '../Post';
import { Empty } from 'antd';
import { Input } from 'antd';
const { Search } = Input;

const Posts = (props) => {
  const {
    posts,
    lastPostElementRef,
    loading,
    handleSearch,
    keyword,
    keywordText,
    handleSearchChange,
  } = props;
  return (
    <Root>
      <Search
        placeholder="input search text"
        allowClear
        value={keywordText}
        onChange={handleSearchChange}
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        loading={loading}
      />
      <div>{keyword && `Searching result for ${keyword}`}</div>
      {posts.length === 0 && !loading ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ) : null}
      {posts.map((item, index) => (
        <div
          ref={posts.length === index + 1 ? lastPostElementRef : undefined}
          key={item.id}
        >
          <Post post={item} />
        </div>
      ))}
      <div>{loading && 'Loading...'}</div>
    </Root>
  );
};

export default container(Posts);
