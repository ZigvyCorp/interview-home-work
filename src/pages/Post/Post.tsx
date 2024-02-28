import { Card, Input, Pagination, Tag, Tooltip } from "antd"
import moment from "moment"
import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useGetAllPostQuery } from "../../features/post/postApiSlice"
import { PostResponseDTO } from "../../features/post/resDto"
import AddPost from "./AddPost"
import Author from "./Author"
import DeletePost from "./DeletePost"
import EditPost from "./EditPost"
import ShowComment from "./ShowComment"
import { EditDto, initEditDto } from "./postInterface"
const { Search } = Input
const Post = () => {
  const ITEMS_PER_PAGE: number = 5
  let TOTAL_ITEMS: number = 100
  const { data, isLoading } = useGetAllPostQuery()
  const [posts, setPosts] = React.useState<PostResponseDTO[]>(data || [])
  const [page, setPage] = React.useState(1)
  const [isEdit, setIsEdit] = React.useState<EditDto>({ ...initEditDto })
  let navigate = useNavigate()

  React.useEffect(() => {
    setPosts(data !== undefined ? data : [])
  }, [data])

  React.useEffect(() => {
    setPosts(
      data !== undefined
        ? data.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
        : [],
    )
    TOTAL_ITEMS = data?.length || 50
  }, [page, data])

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-4">
      <div className="d-flex justify-content-between align-items-center w-100">
        <Search
          placeholder="Search title"
          style={{ width: "85%", padding: " 20px 0px" }}
          onSearch={value => {
            if (value === "") {
              return setPosts(data !== undefined ? data : [])
            }
            const filteredData: PostResponseDTO[] | undefined = data?.filter(
              (post: PostResponseDTO) => post.title.includes(value),
            )
            setPosts(filteredData !== undefined ? filteredData : [])
          }}
          onChange={e => {
            if (e.target.value == "") {
              setPosts(
                data !== undefined
                  ? data.slice(
                      (page - 1) * ITEMS_PER_PAGE,
                      page * ITEMS_PER_PAGE,
                    )
                  : [],
              )
            } else {
              return
            }
          }}
        />
        <AddPost isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>
      {data &&
        posts.map((post: PostResponseDTO) => {
          return (
            <Card
              bordered={false}
              key={post.id}
              hoverable
              title={
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                  to={`/post/${post.id}`}
                >
                  Title: {post.title}
                </Link>
              }
              extra={
                <a href={`/post/${post.id}`}>
                  <Tag color="gold">Detail</Tag>{" "}
                </a>
              }
              className="m-4"
              style={{ width: "100%", border: "1px solid green" }}
            >
              <div className="d-flex justify-content-start align-items-center ">
                <EditPost id={post.id} setIsEdit={setIsEdit} />
                <DeletePost id={post.id} />
              </div>

              <Author id={post.userId} />
              <p className="card-text">
                Created at : {moment().format("DD-MM-YYYY")}
              </p>
              <p className="card-text">
                <Tooltip
                  title={
                    <p className="fs-5" style={{ width: "100%" }}>
                      {post.body}
                    </p>
                  }
                >
                  <span>
                    {" "}
                    {post.body.length > 100
                      ? post.body.slice(0, 100) + "..."
                      : post.body}
                  </span>
                </Tooltip>
              </p>

              <div className="d-flex justify-content-center">
                <ShowComment postId={post.id.toString()} />
              </div>
            </Card>
          )
        })}
      <Pagination
        simple
        defaultPageSize={ITEMS_PER_PAGE}
        defaultCurrent={page}
        pageSize={ITEMS_PER_PAGE}
        pageSizeOptions={[ITEMS_PER_PAGE]}
        total={TOTAL_ITEMS}
        onChange={value => setPage(value)}
      />
    </div>
  )
}

export default Post
