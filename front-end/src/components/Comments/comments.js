import { Button } from "antd"
import React, { useEffect, useState } from "react"
import moment from "moment"
import { getCommentsByIdPost } from "../../services/comment.services"
import { getUserById } from "../../services/user.services"
import { useLocation } from "react-router-dom"

const Comment = ({ comment }) => {
  const getUser = async (id) => {
    const user = await getUserById(id)
    return user
  }

  const [user, setUser] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser(comment.owner)
        setUser(user)
      } catch (error) {}
    }
    fetchData()
  }, [])

  return (
    <div className="flex mt-3">
      <img
        className="max-w-[50px] max-h-[50px] rounded-full mr-[10px]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyW1v_mM9vuI9Sd7amcifLxqjlFN7bXlvv3LLtPHuLm1khSZwqsovb7bbOWb-z5CRwqnU&usqp=CAU"
      />
      <div>
        <div className="flex items-center">
          <div className="mr-[10px] text-gray-600 text-lg">
            {user && user.name}
          </div>
          <div className="text-sm text-gray-400">
            {moment(comment.created_at).fromNow()}
          </div>
        </div>
        <div className="text-lg">{comment.content}</div>
        <Button className="text-sm">Reply to</Button>
      </div>
    </div>
  )
}

const Comments = ({ idPost }) => {
  const location = useLocation()
  const { pathname } = location
  const [comments, setComments] = useState([])
  const [isCollapsed, setCollapsed] = useState(true)
  const toggleCollapse = () => {
    setCollapsed(!isCollapsed)
  }

  const fetchData = async () => {
    try {
      const path = pathname.split("/").filter(Boolean)
      const id = idPost ? idPost : path[path.length - 1]
      const comments = await getCommentsByIdPost(id)
      setComments(comments)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="mx-[10px] mt-[30px]">
      <div
        onClick={toggleCollapse}
        className="text-xl text-gray-600 cursor-pointer"
      >
        {comments ? comments.length : 0} replies
      </div>
      {isCollapsed ? null : (
        <div className="mt-3">
          {comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Comments
