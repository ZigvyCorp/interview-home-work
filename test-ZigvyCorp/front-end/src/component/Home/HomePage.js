import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostsRequest,
  fetchCommentsRequest,
  fetchUsersRequest,
} from "../../redux/actions";
import Post from "../Post/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const users = useSelector((state) => state.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const postsPerPage = 10;

  useEffect(() => {
    dispatch(fetchPostsRequest());
    dispatch(fetchCommentsRequest());
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const postsWithUserData = currentPosts.map((post) => {
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

  return (
    <div className="container mt-5">
      <div className="text-center">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search some posts..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-8 mx-auto">
          {postsWithUserData.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
        <div className="footer text-center mt-3 fixed-bottom">
          <ul className="pagination justify-content-center">
            {[
              ...Array(Math.ceil(filteredPosts.length / postsPerPage)).keys(),
            ].map((number) => (
              <li key={number + 1} className="page-item">
                <button
                  className="page-link"
                  onClick={() => paginate(number + 1)}
                >
                  {number + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
