import React, { Component } from "react";
// import Cookies from "js-cookie";
import { Container } from "react-bootstrap";
import axios from 'axios';

import Post from "./post";
import Comments from "./comments";

class Blog extends Component {
  state = {
    posts: [],
    users: [], 
    comments: []
  };
  // componentDidMount() {
  //   const token = Cookies.get("token");
  //   if (!token) {
  //     this.props.history.push("/login");
  //   }
  // }

  componentDidMount() {
    axios.get('http://localhost:1607/post')
    .then((res) => {
      // console.log(res);
      this.setState({
        posts: res.data.data
      });
    })
    .catch((err) => {
      console.log(err);
    });

    axios.get('http://localhost:1607/user')
    .then((res) => {
      // console.log(res);
      this.setState({
        users: res.data.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  findUserName(users, ownerId) {
    var result;
    users.map((user) =>
    {
      console.log(user.id + " " + ownerId);
      if(user.id === ownerId){
        result = user.name;
      }
    });

    return result;
  }

  render() {

    var showPosts = this.state.posts;
    var users = this.state.users;
    var ShowComments = this.state.comments;
    console.log(showPosts);
    console.log("cmt:", ShowComments);
    return (
      
      <Container>
        {
          showPosts.map((post, i) => {
            return (
              <Post key={i} owner={this.findUserName(users, post.owner)} createAt={post.created_at} title={post.title} content={post.content}/>
            )
          })
          
        }
        <Comments />
      </Container>
    )
  }
}

export default Blog;