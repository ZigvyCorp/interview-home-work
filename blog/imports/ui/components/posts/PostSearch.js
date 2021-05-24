import React from 'react';

class PostSearch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </React.Fragment>
    )
  }
}

export default PostSearch;