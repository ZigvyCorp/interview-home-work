import React from 'react'
import BlogList from './BlogList'
import BlogDetail from './BlogDetail'
import blogList from './data.json'
// import commentList from './comments.json'
// import CommentList from './CommentList'
const BlogMain = () => {
  return (
    <div className='container' > 
        <BlogList blogList = {blogList}/>
        <BlogDetail/>
        {/* <CommentList commentList ={commentList}/> */}
    </div>
  )
}

export default BlogMain