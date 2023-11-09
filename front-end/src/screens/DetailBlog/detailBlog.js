import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import PostHeader from "../../components/PostsHeader/postHeader"
import PostDesription from "../../components/PostDescription/postDescription"
import Comments from "../../components/Comments/comments"
import { getPostById } from "../../services/post.services"

const DetailBlog = () => {
  const location = useLocation()
  const { pathname } = location

  const [post, setPost] = useState({})

  const setData = async () => {
    try {
      const path = pathname.split("/").filter(Boolean)
      const id = path[path.length - 1]
      const post = await getPostById(id)
      setPost(post)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setData()
  }, [])

  return (
    <div className="p-[10px]">
      {post && (
        <div>
          <PostHeader
            author={post?.owner?.name}
            created={post?.created_at}
            title={post?.title}
            tags={post?.tags}
          />
          <PostDesription description={post?.content} view={true} />
          <Comments idPost={post?._id} />
        </div>
      )}
    </div>
  )
}

export default DetailBlog
