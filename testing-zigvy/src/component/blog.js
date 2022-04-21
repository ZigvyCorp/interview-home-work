import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Pagination } from "antd";
import { Row, Col } from "antd";

import "antd/dist/antd.css";

const pageSize = 6;

class Blog extends Component {
  state = {
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data,
          totalPage: data.length / pageSize,
          minIndex: 0,
          maxIndex: pageSize,
        })
      );
  }

  handleChange = (page) => {
    this.setState({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };

  render() {
    const { data, current, minIndex, maxIndex } = this.state;
    return (
      <div className="App" style={{ marginTop: "20px" }}>
        console.log(data);
        <div className="container" style={{ fontSize: "20px" }}>
          {data?.map(
            (data, index) =>
              index >= minIndex &&
              index < maxIndex && (
                <Row>
                  <Col
                    style={{ textAlign: "center" }}
                    key={data.title}
                    span={24}
                  >
                    {data.title}
                  </Col>

                  <Col style={{ marginLeft: "15px" }} key={data.body} span={24}>
                    {data.body}
                  </Col>
                </Row>
              )
          )}
        </div>
        <Pagination
          pageSize={pageSize}
          current={current}
          total={data.length}
          onChange={this.handleChange}
          style={{ bottom: "0px" }}
        />
      </div>
    );
  }
}
export default Blog;
