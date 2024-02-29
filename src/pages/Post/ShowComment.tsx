import { Button, Spin } from "antd"
import { useGetCommentsQuery } from "../../features/post/postApiSlice"
import React from "react"
import { CommentResponseDTO } from "../../features/post/resDto"
const ShowComment = ({ postId }: { postId: any }) => {
  const [showComment, setShowComment] = React.useState(false)
  const { data, error, isLoading } = useGetCommentsQuery(
    { id: postId },
    { skip: showComment },
  )
  if (isLoading) {
    ;<Spin tip="Loading" size="small">
      <div className="content" />
    </Spin>
  }
  return (
    <div className="d-flex flex-column justify-content-center ">
      <Button
        className={`${showComment ? "bg-success" : "bg-primary"} text-light  `}
        onClick={() => setShowComment(!showComment)}
      >
        {data === undefined
          ? "loading..."
          : !showComment
            ? ` show ${data && data.length} comments`
            : "hidden comment"}
      </Button>
      {showComment && (
        <div className="">
          {data &&
            data.map((comment: CommentResponseDTO) => {
              return (
                <div
                  className="card mt-3 p-2 bg-light"
                  style={{ width: "100%" }}
                >
                  <div className="">
                    <p>
                      <b>{comment.name}</b>
                    </p>
                    <p>
                      <i>{comment.email}</i>
                    </p>
                    <p className="">
                      {" "}
                      {comment.body.length > 100
                        ? comment.body.slice(0, 100) + "..."
                        : comment.body}
                    </p>
                  </div>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default ShowComment
