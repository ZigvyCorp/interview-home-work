import React, { Component } from "react";
import Topbar from "../../components/Topbar";
import PostList from "../../components/PostList";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Topbar></Topbar>
        <PostList></PostList>
      </div>
    );
  }
}
