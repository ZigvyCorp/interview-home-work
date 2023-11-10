import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import BlogPost from '../../components/Posts/BlogPost';
import Search from '../../components/Search/Search';
import './homepage.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsStart } from '../../redux/postsSlice';
import { fetchCommentsStart } from '../../redux/commentsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);
  const { comments } = useSelector(state => state.comments);
  const loading = useSelector(state => state.posts.loading);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    dispatch(fetchPostsStart());
    dispatch(fetchCommentsStart());
  }, [dispatch]);

  const filteredPosts = searchTerm
    ? posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : posts;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='homepage'>
      <div className='search'>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='posts'>
            {currentPosts.map(post => (
              <BlogPost key={post.id} post={post} comments={comments} />
            ))}
          </div>
          <div className='container-fluid'>
            <Pagination
              postsPerPage={postsPerPage}
              totalPost={filteredPosts.length}
              paginate={paginate}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default HomePage;
