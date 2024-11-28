import React, { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, Link } from "react-router-dom"; // Import Link from react-router-dom
import { fetchPostsRequest } from "../../redux/actions/postActions";
import Post from "./Post";

export default function HomePage() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1; // Default to page 1

  useEffect(() => {
    dispatch(fetchPostsRequest(page, 2)); // Fetch posts with the current page
  }, [dispatch, page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalPages = Math.ceil(posts.total / 2); // Update based on your total items
  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === page}>
        <Link to={`?page=${number}`}>{number}</Link>{" "}
        {/* Use Link for navigation */}
      </Pagination.Item>
    );
  }

  const displayPosts = posts.posts;

  return (
    <div>
      <div>
        {displayPosts ? (
          displayPosts.map((post) => <Post key={post.id} {...post} />)
        ) : (
          <p>Loading</p>
        )}
      </div>
      <div>
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
}
