import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
import Button from "../../utilities/formComponents/button";

const Pagination = ({ posts, max, totalPages }) => {
  const generatePagination = () => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      const pageNumberComponent = (
        <Link className="mx-1 mb-4" key={Math.random()} to={`/?page=${i}`}>
          <Button className="text-center">{i}</Button>
        </Link>
      );
      pagination.push(pageNumberComponent);
    }
    return pagination;
  };

  return (
    <div className="w-75 m-auto row justify-content-center align-items-center">
      {generatePagination()}
    </div>
  );
};

const mapStateToProps = (state) => {
  const posts = _.get(state, "blog.data.posts");
  return { posts };
};

export default Pagination;
