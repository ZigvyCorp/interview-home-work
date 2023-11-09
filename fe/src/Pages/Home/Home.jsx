import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllPostsRequest,
  GetAllCommentsRequest,
  GetAllUsersRequest,
} from "../../Redux/actions";
import Post from "../Post/Post";
import { Pagination, Input} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Nabar from "../Nabar/Nabar";
import './Home.css'
const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const users = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  useEffect(() => {
    dispatch(GetAllPostsRequest());
    dispatch(GetAllCommentsRequest());
    dispatch(GetAllUsersRequest());
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const postsWithUserData = filteredPosts.map((post) => {
    const postComments = comments
      .filter((comment) => comment.post === post.id)
      .map((comment) => ({
        ...comment,
        user: users.find((user) => user.id === comment.owner),
      }));
    return {
      ...post,
      comments: postComments,
      user: users.find((user) => user.id === post.owner),
    };
  });
  const paginatedPosts = postsWithUserData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Nabar />
      <div className="container">
        <div className="input">
            <Input
              type="text"
              placeholder="Search some posts..."
              value={searchTerm}
              addonAfter={<SearchOutlined />}
              onChange={handleSearchChange}
            />
        </div>
        <div>
          <div>
            {paginatedPosts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
        <div className="pagination">
          <Pagination
            pageSize={pageSize}
            current={currentPage}
            total={postsWithUserData.length}
            onChange={handleChange}
          />
        </div>
      </div>

    </>
  );
};

export default Home;

