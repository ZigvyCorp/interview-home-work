import React, { useState } from "react";
import { Layout, Row, Col, Button, Collapse, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import CommentSection from "../Comment/CommentSection";
import { Link } from "react-router-dom";

const { Panel } = Collapse;

const BlogPost = ({ post }) => {
  return (
    <>
      <Layout justify="center" align="middle" style={{ padding: "10px 16px" }}>
        <Row>
          <Col span={24}>
            <Link to={`/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <p>Author: Nhật Hào</p>
          </Col>
          <Col span={12}>
            <h4>November 10, 2023</h4>
          </Col>
        </Row>

        <Row style={{ padding: "10px 16px", marginTop: "20px" }}>
          <Col span={24}>{post.body}</Col>
        </Row>
      </Layout>
      <Layout style={{ padding: "10px 16px" }}>
        <CommentSection />
      </Layout>
    </>
  );
};

export default BlogPost;
