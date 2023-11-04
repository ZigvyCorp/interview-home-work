import { useEffect, useMemo, useState } from "react"
import { Pagination, Space } from "antd";
import SearchBox from "../../../components/SearchBox";
import PostItem from "./PostItem";
import { PAGINATION_OPTS } from '../../../configs/app';
import { dispatch, useSelector } from "../../../app/store";
import { selectPosts } from "../../../app/redux/posts/postsSlice";

export default function PostList() {
  const postData = useSelector(selectPosts);

  const { posts, pagination } = postData ?? {};

  const [keyword, setKeyword] = useState('');
  const [limit, setLimit] = useState(PAGINATION_OPTS[0]);
  const [page, setPage] = useState(1);

  const params = useMemo(() => {
    return {
      limit: limit,
      skip: limit * (page - 1),
      keyword,
    }
  }, [page, limit, keyword]);

  const onShowSizeChange = (current, pageSize) => {
    setLimit(pageSize);
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_POSTS', payload: params });
  }, [params]);

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS' });
    dispatch({ type: 'FETCH_COMMENTS' });
  }, []);

  useEffect(() => {
    setLimit(PAGINATION_OPTS[0]);
    setPage(1);
  }, [keyword]);

  return (
    <Space direction="vertical" size='middle' style={{ width: '100%' }}>
      <SearchBox
        defaultKeyword={keyword}
        onSearch={(value) => setKeyword(value)}
      />

      {posts?.map(post => <PostItem key={post._id} data={post} />)}

      <Pagination
        current={page}
        showSizeChanger
        pageSize={limit}
        defaultPageSize={limit}
        total={pagination?.total}
        pageSizeOptions={PAGINATION_OPTS}
        onShowSizeChange={onShowSizeChange}
        onChange={(newPage) => setPage(newPage)}
        style={{ justifyContent: 'flex-end', display: 'flex' }}
      />
    </Space>
  )
}
