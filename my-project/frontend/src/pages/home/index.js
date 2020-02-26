import React, { Component } from "react";
import Topbar from "../../components/Topbar";
import PostList from "../../components/PostList";
import Sider from "../../components/sider";
import { Row, Col } from 'antd';

export default class Home extends Component {
  render() {
    return (
      <>
        <Topbar></Topbar>
        <div className="content">
        <Row gutter={16}>
        <Col span={4}> <Sider></Sider></Col>
      <Col span={20}> <PostList></PostList></Col>
        </Row>
         
         
        </div>
      </>
    );
  }
}
