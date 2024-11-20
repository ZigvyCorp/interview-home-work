import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { getPost } from '../feature/blogSlice';

const BlogDetail = () => {

  const location = useLocation();
  const getPostId = location.pathname.split("/")[1];
  const dispatch = useDispatch();


  useEffect(() => {
      dispatch(getPost(getPostId));
  }, [dispatch]);

  const blogState = useSelector((state) => state.blog.singleBlog);

  return (
    <>
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='blog-details-card'>
                        <h3 className='title'>
                            {blogState.title}
                        </h3>
                        <p>{blogState.body}</p>
                        <Link to="/" className='d-flex align-items-center gap-10'>
                            Go back to Blogs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetail