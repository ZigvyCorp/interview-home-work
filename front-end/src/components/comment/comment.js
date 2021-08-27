import React, { Component } from "react";
import "./comment.css";

import axios from "axios";
import { Col, Row } from "reactstrap";

export default class comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cmts: [],
      showCmtsBox: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent() {
    this.setState({ showCmtsBox: !this.state.showCmtsBox });
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/cmt/post?postId=${this.props.postId}`)
      .then((res) => {
        let data = [];
        res.data.result.forEach((ele) => {
          ele.created_at = new Date(Number.parseInt(ele.created_at));
          ele.created_at = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(ele.created_at);
          data.push(ele);
        });
        this.setState((state) => {
          state.cmts = data;
          return state;
        });
        console.log(this.state.cmts);
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <button
          
          style={{ float: "left", width: "100%", textAlign: "left" }}
          onClick={() => this.hideComponent()}
        >
          {this.state.cmts.length} replies
        </button>
        {this.state.cmts &&
          this.state.cmts.map((cmt) => {
            return (
              <div  style={{ textAlign: "left" }}>
                {this.state.showCmtsBox && (
                  <div>
                    <Row>
                      <Col className="text-left">{cmt.owner.name}</Col>
                      <Col>{cmt.created_at}</Col>
                    </Row>
                    <div>{cmt.content}</div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    );
  }
}
