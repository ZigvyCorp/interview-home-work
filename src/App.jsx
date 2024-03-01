import { Avatar, Card, Collapse, Layout, Pagination } from "antd";
import Search from "antd/es/input/Search";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentFetch, getPostFetch, getUserFetch } from "./redux/actions.";

const { Panel } = Collapse;

function App() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [filteredPost, setFilteredPost] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const posts = useSelector((state) => state.myFirstReducer.posts);
  console.log("🚀 ~ App ~ posts:", posts);
  const users = useSelector((state) => state.myFirstReducer.users);
  const comments = useSelector((state) => state.myFirstReducer.comments);
  console.log("🚀 ~ App ~ comments:", comments);
  console.log("🚀 ~ App ~ users:", users);
  const totalCount = useSelector((state) => state.myFirstReducer.totalCount);

  // funcs
  const handleSearchPosts = (value) => {
    console.log(value);
    setSearchValue(value);
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPost(filteredPosts);
  };

  useEffect(() => {
    dispatch(getUserFetch());
    dispatch(getPostFetch(page, pageSize));
    dispatch(getCommentFetch());
  }, [page, pageSize]);

  return (
    <>
      <Layout>
        <Header>
          <div className="h-full flex items-center justify-between">
            <img
              src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Logo"
              style={{ width: 50, marginRight: 16 }}
            />
            <Avatar
              size={40}
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div style={{ background: "#fff", padding: 24, minHeight: "100vh" }}>
            <Search
              placeholder="Search by title"
              onSearch={handleSearchPosts}
              style={{
                width: 500,
              }}
            />
            <Pagination
              className="my-10"
              onChange={(page, pageSize) => {
                setPage(page);
                setPageSize(pageSize);
              }}
              total={totalCount}
            />
            {searchValue != "" && filteredPost.length > 0 ? (
              filteredPost.map((post) => (
                <CardComponent
                  post={post}
                  users={users}
                  comments={comments}
                  key={post.id}
                />
              ))
            ) : searchValue != "" && filteredPost.length == 0 ? (
              <p>No result</p>
            ) : (
              posts.map((post) => (
                <CardComponent
                  post={post}
                  users={users}
                  comments={comments}
                  key={post.id}
                />
              ))
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>© 2024 Your Blog Name</Footer>
      </Layout>
    </>
  );
}

const CardComponent = ({ post, users, comments }) => {
  return (
    <Card title={post.title} key={post.id} className="my-10 shadow-lg">
      <p>Author: {users.find((user) => user.id === post.userId).name}</p>
      <p>Created at: 2024-02-29</p>
      <p className="my-3"> {post.body.substring(1, 100) + "..."} </p>
      {comments.reduce((count, obj) => {
        if (obj.postId === post.id) {
          return count + 1;
        }
        return count;
      }, 0)}{" "}
      replies
      <hr className="my-2" />
      <Collapse onChange={() => {}}>
        {comments.map((comment) => {
          return (
            comment.postId === post.id && (
              <Panel header={comment.email} key={comment.id}>
                <p>{comment.body}</p>
              </Panel>
            )
          );
        })}
      </Collapse>
    </Card>
  );
};

export default App;
