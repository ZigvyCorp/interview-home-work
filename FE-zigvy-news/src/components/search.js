/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUserSuccess } from "../actions";

const Search = (props) => {
  const { setSearch, location, history } = props;

  const [keyword, setKeyword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/?search=${keyword}`);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const search = urlParams.get('search');
    if (search || (search && search.length !== 0)) {
      setKeyword(search);
      setSearch(search);
    } else {
      setKeyword('');
      setSearch(undefined);
    }
  }, [location.search])

  return (
    <div>
      <form
        className="ml-3 d-inline-block float-left"
        id="searchForm"
        onSubmit={handleSubmit}
      >
        <div className="input-group" style={{ width: 300 }}>
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search post title, content, ..."
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit" form="searchForm">
              <i className="fa fa-search fa-sm" />
            </button>
          </div>
        </div>
      </form>
      <button
        className="btn btn-outline-primary mr-4 float-right"
        onClick={() => {
          history.push('/');
        }}
      >
        <i className="fa fa-refresh" />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLogin: state.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserSuccessAction: bindActionCreators(fetchUserSuccess, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
