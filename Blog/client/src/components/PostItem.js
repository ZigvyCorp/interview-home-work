import React from "react";
import logo from "../images/logo.png";
import { Typography, Avatar, Comment, Tooltip, Collapse } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./PostItem.css";
import { Link } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";
import moment from "moment";

const { Panel } = Collapse;

const { Text } = Typography;
const styleTagName = {
  fontSize: "1.35rem",
  fontWeight: "600",
  color: "var(--co-title)",
};
const styleLightTagName = {
  fontSize: "1.35rem",
  color: "var(--co-title)",
};

export default function PostItem({ post }) {
  return (
    <div className="post">
      <div className="title-container">
        <div className="text-highlight">{post.title[0]}</div>
        <Link to={`/posts/${post._id}`}>
          <h1 className="title">{post.title}</h1>
        </Link>
      </div>
      <div>
        <Text style={styleTagName}>Author:</Text>
        <Text style={styleLightTagName}>
          <span> </span>
          {post.author}
        </Text>
      </div>
      <div>
        <Text style={styleTagName}>Created at:</Text>
        <Text style={styleLightTagName}>
          <span> </span>
          {post.date}
        </Text>
      </div>
      <div className="post-content">
        <Text
          style={{
            fontSize: "1.25rem",
            position: "relative",
            marginTop: "2rem",
            textTransform: "capitalize",
            textAlign: "justify",
          }}
        >
          {post.content.substring(0, 199)}
        </Text>
      </div>
      <div className="comment-container">
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined
              rotate={isActive ? 90 : 0}
              style={{ marginLeft: "-1rem" }}
            />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header={`${post.listCmt.length} comments`}
            key="1"
            className="site-collapse-custom-panel"
            style={{
              fontSize: "1.35rem",
              fontWeight: "600",
              color: "var(--co-title)",
            }}
          >
            <div>
              {post.listCmt.map((cmt) => (
                <Comment
                  author={
                    <a
                      style={{
                        textTransform: "capitalize",
                        fontSize: "1.1rem",
                        color: "var(--co-title)",
                      }}
                    >
                      {cmt.name}
                    </a>
                  }
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      alt="Han Solo"
                    />
                  }
                  content={
                    <div>
                      <p style={{ fontSize: "1rem", fontWeight: "500" }}>
                        {cmt.body}
                      </p>
                      <span key="comment-basic-reply-to">Reply to</span>
                    </div>
                  }
                  datetime={
                    <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                      <span
                        style={{ fontSize: "1rem", color: "var(--co-title)" }}
                      >
                        {moment().fromNow()}
                      </span>
                    </Tooltip>
                  }
                />
              ))}
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
