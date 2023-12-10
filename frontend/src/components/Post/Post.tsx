import React, { useCallback, useEffect } from 'react'
import PostContent from './PostContent'
import { useDispatch, useSelector } from 'react-redux'
import { selectPage, selectPostList, selectPostListLoading, selectTotalPages } from '../../redux/reducer/postReducer'
import { getPosts, loadMorePost } from '../../redux/actions/postActions'
import { useLocation } from 'react-router-dom'

const PostList = () => {
  const location = useLocation();
  const dispatch = useDispatch()
  const page = useSelector(selectPage)
  const posts = useSelector(selectPostList)
  const loading = useSelector(selectPostListLoading)
  const totalPages = useSelector(selectTotalPages)
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('title') || '';

  const hasMore = page < totalPages
  console.log(page, totalPages, loading)

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const offsetHeight = document.documentElement.offsetHeight;
    const clientHeight = window.innerHeight;
    if (scrollTop + clientHeight >= offsetHeight - 100 && !loading && hasMore) {
      dispatch(loadMorePost())
      console.log(page)
      dispatch(getPosts({ page: page + 1, search: searchTerm }));
    }

  }, [dispatch, page, loading, hasMore, searchTerm]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className=''>
      {posts.map(post => <PostContent {...post} key={post.postId} />)}
    </div>
  )
}

export default PostList
