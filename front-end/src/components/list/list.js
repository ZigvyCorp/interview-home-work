import React, { Component } from "react";
import './list.css'
// import {Link} from 'react-router'
import Post from "../post/post";
// import { fetchBlogPostByKey } from "./../../actions/blogPostActions";
import axios from "axios";
import { Container } from "reactstrap";
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [],
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/post/key?key=all&data=all`)
      .then((res) => {
        let data = [];
        res.data.result.forEach((ele) => {
          ele.created_at = new Date(Number.parseInt(ele.created_at));
          ele.created_at = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(ele.created_at);
          ele.summary = ele.content.substring(0, 100);
          data.push(ele);
        });
        this.setState((state) => {
          state.blogPosts = data;
          return state;
        });
        console.log(111, this.state.blogPosts);
      })
      .catch((error) => console.log(error));
  }

  // deleteHandler(i,e){
  //     e.preventDefault();
  //     console.log(this.props);
  //     this.props.onDelete(this.props.blogPost[i]._id)
  // };

  render() {
    return (
      <Container className="background-color">
        <Post postData={this.state.blogPosts} />
      </Container>
    );
  }
}
