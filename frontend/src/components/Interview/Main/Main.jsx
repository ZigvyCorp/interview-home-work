import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';
import { AutoComplete, Pagination } from 'antd';
import { useDispatch } from 'react-redux';
import { GET_ALL_COMMENT_SAGA, GET_ALL_POSTS_SAGA, GET_ALL_USER_SAGA } from '../../../redux/constants/Interview/InterviewConstants';
import { searchPostAction } from '../../../redux/actions/InterviewAction';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Main() {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);



  const postData = useSelector((state) => state.InterviewReducer.postData);

  //! pagination
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postData.slice(firstPostIndex, lastPostIndex);



    // ! debounce search
  const searchRef = useRef(null);
  
  let options = [];
  

  postData?.forEach((item, index)=>{
    // console.log('item: ', item);
    const newObject = {value: item.title};
    options.push(newObject);
  })


  const handleOnSearch = (value)=>{
    console.log(value);
      // ! lấy kí tự cần tìm==> gọi API ==> khi trả về thì lấy data gán lại state 
      if (value) {
        if (searchRef.current) {
          clearTimeout(searchRef.current);
        }
        searchRef.current = setTimeout(() => {
          // dispatch(NguoiDungSliceActions.searchUser(value));
          dispatch(searchPostAction(value))
        }, 300);
      } else {
        dispatch({
          type: GET_ALL_POSTS_SAGA
        })
      }
     
  }

  const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(  
      ()=>{
      dispatch({
      type: GET_ALL_POSTS_SAGA
      })
     dispatch({
     type: GET_ALL_USER_SAGA
      })
    dispatch({
      type: GET_ALL_COMMENT_SAGA
      })
  } ,[])

  const renderPost = () => {
    return currentPosts.map((item, index) => {
      
      return <Post  key={"index" + index} item={item} />;
    });
  };
  const handleOnChange = (value)=>{
    setCurrentPage(value)
  }
  return (
    <div 
  
    >
          <div className='text-end me-5 my-2'>
            <AutoComplete
              style={{
                width: 500,
              }}
              options={options}
              placeholder="Search title"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              onChange={handleOnSearch}
            />
          </div>
          <div   style={{
      minHeight:"80vh",
    }}>

          {renderPost()}
          </div>
          <div className='text-end pb-5'
          style={{
            marginRight:"150px"
          }}
          >
          <Pagination pageSize={currentPosts.length} total={postData.length} onChange={handleOnChange} />
          </div>
    </div>
  )
}
