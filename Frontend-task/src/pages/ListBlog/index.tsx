import React from 'react'
import Blog from '../../components/Blog'

const ListBlog = () => {

  return (
    <div className='container_listpost'>
      {Array(10).fill(0).map((item, idx) => <Blog key={idx} />)}

    </div>
  )
}

export default ListBlog