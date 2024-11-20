import { useEffect, useState } from 'react';
import { List, Pagination } from 'antd';
import { fetchPosts, fetchUsers } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import PostItem from '../../components/PostItem';
import { Input } from 'antd';
const { Search } = Input;

export default function PostListPages(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10; // Number of posts per page
  const dispatch = useDispatch();
  const { posts } = useSelector((state: any) => state.posts);
  const { users } = useSelector((state: any) => state.users);
  const [paginatedData, setPaginatedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (posts) {
      const paginatedData = posts?.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
      );
      setPaginatedData(paginatedData)
      setIsLoading(false)
    }
  }, [currentPage, posts])

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const onSearch = (value: string) => {
    if (value && posts && posts.length > 0) {
      setPaginatedData(posts.filter((post: any) => post.title.toLowerCase().includes(value.toLowerCase())))
      return
    }

    const paginatedData = posts?.slice(
      (currentPage - 1) * postsPerPage,
      currentPage * postsPerPage
    );
    setPaginatedData(paginatedData)
  };

  return (
    <div style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: 50 }}>
      <Search placeholder="input search text" onSearch={onSearch} enterButton allowClear />

      <List
        loading={isLoading}
        itemLayout="vertical"
        dataSource={paginatedData}
        renderItem={(post: any) => <PostItem post={post} users={users} />}
      />
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={posts?.length}
        pageSize={postsPerPage}
        showSizeChanger={false}
        style={{ textAlign: 'center' }}
      />
    </div>
  )
}
