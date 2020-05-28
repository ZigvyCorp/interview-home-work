/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUsers } from "../../actions";
import Comment from "./comment";

const CommentList = (props) => {
  const dataPerPage = 3;
  const { userState, comments } = props;

  const [pagination, setPagination] = useState({
    limit: dataPerPage,
    currentPage: 1,
    totalPage: Math.ceil(comments.length / dataPerPage),
    data: comments.slice(0, dataPerPage)
  })
  
  const choosePage = page => {
    const limit = page * dataPerPage;
    setPagination({
      ...pagination, limit,
      currentPage: page,
      data: comments.slice(0, limit)
    })
  }

  useEffect(() => {
    props.fetchUsersAction();
  }, []);

  if (userState.users.length === 0 || comments.length === 0) {
    return <div className="text-center"> There are no comments. </div>
  }
  return (
    <div className="comment-wrapper">
      <div className="panel panel-info">
        <ul className="media-list">
          {pagination.data.map((item) => {
            const owner = userState.users.find((e) => e._id === item._idOwner);
            return !item.isDelete ? <Comment owner={owner} comment={item} /> : null;
          })}
        </ul>
      </div>
      <div className="text-center">
        <button
          className="btn btn-outline-primary w-50"
          onClick={() => choosePage(pagination.currentPage + 1)}
          disabled={pagination.currentPage === pagination.totalPage}>
          Load more
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userState: state.userState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersAction: bindActionCreators(fetchUsers, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CommentList));
