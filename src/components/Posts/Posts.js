import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPost } from "../../redux/action/action";
import axios from "axios";
import Post from './Post/Post';

const  Posts = (props)=> {
    const post  = props.listPost.map((post, idx)=>{
      return (
        <Post  key={idx} {...post} />
      )
    });
    return (
      <div className="row">
        {post}
      </div>
    );

}



export default Posts;




