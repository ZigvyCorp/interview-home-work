import React, { useState, useEffect } from "react";
import UpperNavBar from "../../utilities/bars/upperNavbar";
import SearchBar from "../../utilities/searchBar";
import PostsBoard from "./postsBoard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../utilities/formComponents/button";
import Pagination from "./pagination";
import _ from "lodash";
import PageWithNavBar from "../main/pageWithNavBar";
import { getPostsAction } from "../../actions/actionCreator";

const MAX_PER_PAGE = Number(process.env.REACT_APP_MAX_PER_PAGE);

const Home = ({ posts, getPostsAction }) => {
  const [blogPosts, setBlogPosts] = useState(posts || "");

  useEffect(() => {
    getPostsAction();
  }, []);

  const onSearchBarInput = (value) => {
    const filteredPost = posts
      ? posts.filter((post) => {
          const title = _.get(post, "title", "");
          const tags = _.get(post, "tags", []);
          return (
            title.includes(value) ||
            (tags.length && tags.join(", ").toLowerCase().includes(value))
          );
        })
      : [];
    setBlogPosts(filteredPost);
  };
  return (
    <div className="container-fluid">
      <SearchBar
        className="w-75 mx-auto"
        onSearchBarInput={onSearchBarInput}
        purpose="Search post"
      />
      <div className="text-right w-75 m-auto">
        <Link className="d-inline-block" to="/create-post">
          <Button center={false}>Create post</Button>
        </Link>
      </div>
      <PostsBoard posts={blogPosts} />
      <Pagination
        max={MAX_PER_PAGE}
        totalPages={Math.ceil(blogPosts.length / MAX_PER_PAGE)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const posts = _.get(state, "blog.data.posts");
  return { posts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsAction: () => dispatch(getPostsAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageWithNavBar(Home));
