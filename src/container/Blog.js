import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPost } from "../redux/action/action";
import Posts from "../components/Posts/Posts";

class Blog extends Component {
  componentWillMount() {
    this.props.onInitPost();
  }
  render() {
    return (
      <div className="text-center">
        <Posts listPost={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitPost: () => dispatch(loadPost()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
