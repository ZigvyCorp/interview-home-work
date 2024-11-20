import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import './post.css'
import Comment from "../comment/comment";
// import {Link} from 'react-router'

export default class Post extends Component {

  render() {
    return (
      <div className>
        {this.props.postData &&
          this.props.postData.map((data, i) => {
            return (
              <div className="post-box">
                <div className="title"> {data.title}</div>
                <Row>
                  <Col className="text-left">
                    <div> author: {data.owner.name}</div>
                    <div> create at: {data.created_at}</div>
                  </Col>
                  <Col>
                    {/* tag: {data.tags.length !== 0 ? data.tags : "No tags"} */}
                    {data.tags &&
                      data.tags.map((ele) => {
                        return <span> {ele} </span>;
                      })}
                  </Col>
                </Row>

                <div> content: {data.summary}</div>
                <br />
                <Comment postId={data._id}/>
                <br/>
              </div>
            );
          })}
      </div>
    );
  }
}
