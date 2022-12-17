import React from 'react';
import PostItem from '../components/PostItem';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import * as ACTION from '../redux/constants/constants';
const PostList = ({ data }) => {
  const dispatch = useDispatch();

  const {  loading, searchContent } = useSelector(state => state.PostReducer);

  const searchedPosts = data.filter((item) =>
    item?.title
      .trim()
      .toLowerCase()
      .includes(searchContent?.trim().toLowerCase())
  );
  const handleChangeQuery = debounce((event) => {
    dispatch({ type: ACTION.SET_SEARCH_POST, payload: event.target.value })
  }, 500);


  return (

    <div className='container mt-5'>
      <div className="input-group mb-4 w-50 mx-auto">
        <input type="text" className="form-control me-3" placeholder="Search..." onChange={handleChangeQuery} />
      </div>

      {(!loading && searchedPosts < 0 && data?.map((data, key) => {
        return <PostItem data={data} key={key} />
      })
        )|| searchedPosts?.map((data, key) => {
          return <PostItem data={data} key={key} />
        })

      }
      {loading && <div className="text-center text-success">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

      </div>
      }

    </div>

  );
};

export default PostList;