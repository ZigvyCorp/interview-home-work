/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/scope */
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions";
import { Pagination } from "antd";
import Search from "../components/search";
import PostTable from "../components/posts/post-table";
import 'antd/dist/antd.css';

const Dashboard = (props) => {
  const { postState } = props;

  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 5,
    currentPage: 1
  });

  useEffect(() => {
    const offset = pagination.offset.toString();
    const limit = pagination.limit.toString();

    props.fetchPostsAction({ search, offset, limit });
  }, [pagination.currentPage, search, postState.updatedPost])

  const choosePage = (page) => {
    const offset = (page - 1) * pagination.limit;
    setPagination({ ...pagination, offset, currentPage: page });
  };
  
  return (
    <div className="mt-3">
      {postState.posts && (
        <>
          <Search search={search} setSearch={setSearch} />
          <PostTable posts={postState.posts} />
          <Pagination
            className="float-right mr-5 mb-5"
            onChange={choosePage}
            defaultCurrent={1}
            defaultPageSize={1}
            current={pagination.currentPage}
            total={Math.ceil(postState.totalPosts / pagination.limit)}
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postState: state.postState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsAction: bindActionCreators(fetchPosts, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
