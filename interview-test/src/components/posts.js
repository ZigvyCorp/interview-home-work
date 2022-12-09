import Comments from "./comments.js";
import Accordion from "react-bootstrap/Accordion";
import Pagination from "./pagination.js";
// import SearchInput from "./searchInput.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMemo } from "react";
// import { useSelector } from "react-redux";

let PageSize = 5;
const Posts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  // const { posts } = useSelector((state) => state.posts)

  // pagination
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return posts && posts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  //fetch posts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        // console.log(data);
      });
  }, []);

  //fetch comments
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(data);
        // console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      <div className="searchInput">
        <strong>Search blog by title</strong>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <hr />
      </div>
      <div className="home-button">
          <Link to="/">To home</Link>
      </div>
      <div>
        {currentData && currentData
            .filter((Post) => {
              if (searchTerm === "") {
                return Post;
              } else if (
                Post.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return Post;
              }
            })
            .map((Post) => {
              return (
                <div className="post" key={Post.id}>
                  <h1 className="post-title">{Post.title}</h1>
                  {/* <p className="post-author">Author: {Post.owner}</p> */}
                  <p className="post-create">Create at: 6/12/2022</p>
                  <p className="post-body">{Post.body}</p>
                  {/* <Link to="/blog-detail">blog detail</Link> */}
                  <Accordion defaultActiveKey="1">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        Replies ({comments && comments.length})
                      </Accordion.Header>
                      <Accordion.Body>
                        <Comments comments={comments} />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              );
            })}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={posts && posts.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Posts;
