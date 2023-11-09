import { useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import BlogPost from '../../components/Posts/BlogPost';
import Search from '../../components/Search/Search';
import './homepage.css';

import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
} from '../../redux/postsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.posts.data);

  useEffect(() => {
    dispatch(fetchPostsRequest());
    dispatch(fetchPostsSuccess());
    dispatch(fetchPostsFailure());
  }, []);
  console.log(data);
  return (
    <div className='homepage'>
      <div className='search'>
        <Search />
      </div>
      <div className='posts'>
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
      <div className='pagination'>
        <Pagination />
      </div>
    </div>
  );
};
export default HomePage;
