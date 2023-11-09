import React from "react"

const PostDesription = ({ description, view }) => {
  return (
    <div className="font-bold">
      {view ? description : <div>{description.slice(0, 100) + "..."}</div>}
    </div>
  )
}

export default PostDesription
