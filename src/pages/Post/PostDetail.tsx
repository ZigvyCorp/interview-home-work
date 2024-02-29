import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGetPostByIdQuery } from "../../features/post/postApiSlice"
import Author from "./Author"
import moment from "moment"
import { Button, Card, Tooltip } from "antd"
import ShowComment from "./ShowComment"

const PostDetail = () => {
  let { id } = useParams()
  let navigate = useNavigate()
  const { data: post, isLoading } = useGetPostByIdQuery(id ? id : "", {
    skip: !id,
  })
  if (isLoading) {
    return (
      <div>
        <h1 className="loading">Loading...</h1>
      </div>
    )
  }
  return (
    <div className=" min-vh-100">
      <div className="p-4">
        {post && (
          <div>
            <Card
              title={`${post.title}`}
              // extra={<a href="#">More</a>}
              style={{ width: "100%" }}
            >
              <Author id={post.userId} />
              <p className="card-text">
                Created at : {moment().format("DD-MM-YYYY")}
              </p>
              <p className="card-text">
                <span>{post.body}</span>
              </p>

              <div className="d-flex justify-content-center">
                <ShowComment postId={post.id.toString()} />
                <Button
                  className=" bg-success text-light"
                  onClick={() => {
                    navigate(`/`)
                  }}
                >
                  Back
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostDetail
