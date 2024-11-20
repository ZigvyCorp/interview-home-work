import { Link } from 'react-router-dom'

const BlogCard = (props) => {
    const { id, title, body } = props;
  return (
      <div className='blog-card'>
        <div className='blog-content'>
          <p className='date'>10 Dec, 2023</p>
          <h5 className='title'>{title}</h5>
          <p className='desc'>{body}</p>
          
          <Link to={"/" + id} className='blog-button'>Read More</Link>
        </div>
      </div>
  )
}

export default BlogCard