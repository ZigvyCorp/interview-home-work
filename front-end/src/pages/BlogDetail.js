import { Link } from 'react-router-dom'

const BlogDetail = () => {
  return (
    <>
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='blog-details-card'>
                        <h3 className='title'>
                            A Beautiful Sunday Morning Renaissance
                        </h3>
                        <p>In the world of horology, watches are more than mere timekeepers; they are exquisite pieces of craftsmanship. From intricate movements to elegant designs, each watch tells a unique story. Join us on a journey through the fascinating world of watches, where time becomes an art form.</p>
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