import React, { Component, useEffect, useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

// Import Components
import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
import { getAllPostRequest, addNewPostRequest } from '../../../../redux/actions/PostActions';
import { toggleAddPost } from '../../../../redux/actions/AppActions';

// Import Selectors
import { getShowAddPost } from '../../../../redux/reducer/AppReducer';
import { getPosts, getSearchPosts, getSearchKey, getPostsTotalCount, getLoadingPost } from '../../../../redux/reducer/PostReducer';
import { getCommentsRequest } from '../../../../redux/actions/CommentActions';
import { getComments } from '../../../../redux/reducer/CommentReducer';

function PostListPage (props) {

  const [currentPage, setCurrentPage] = useState(1)

  const dispatch = useDispatch();
  const showAddPost = useSelector(state => getShowAddPost(state));
  const posts = useSelector(state => getPosts(state))
  const comments = useSelector(state => getComments(state))
  const searchData = useSelector(state => getSearchPosts(state))
  const searchKey = useSelector(state => getSearchKey(state))
  const total= useSelector(state => getPostsTotalCount(state))
  const isLoading= useSelector(state => getLoadingPost(state))

  const showData = searchKey && searchKey.length > 0 ?  searchData : posts

  useEffect(()=>{
    dispatch(getAllPostRequest(currentPage));
    dispatch(getCommentsRequest())
  },[])
  
  function loadMore(){
    dispatch(getAllPostRequest(currentPage + 1))
    setCurrentPage(currentPage + 1)
  }

  function handleDeletePost(post){
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      // dispatch(deletePostRequest(post));
    }
  };

  function handleAddPost(owner, title, content){
    dispatch(toggleAddPost());
    dispatch(addNewPostRequest({ owner, title, content }));
  };

  function closeWidget() {
    dispatch(toggleAddPost());
  }

    return (
      <div>
        <PostCreateWidget 
        addPost={handleAddPost} 
        // addPost={()=>{}}
        closeWidget={closeWidget}
        showAddPost={showAddPost} />
        {searchKey && searchKey.length > 0 &&
          <h3>{`result: ${searchData.length}`}</h3>
        }
        <PostList 
        handleDeletePost={handleDeletePost} 
        posts={showData} 
        comments={comments} 
        total={total} 
        isLoading={isLoading}
        loadMore={loadMore}/>
      </div>
    );
}

// Actions required to provide data for this component to render in sever side.
// PostListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props


PostListPage.contextTypes = {
  router: PropTypes.object,
};

export default PostListPage;
