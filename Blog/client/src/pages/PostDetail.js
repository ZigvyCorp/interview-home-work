import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import { useParams } from "react-router-dom";
import { postState$ } from "../redux/selectors";
import { Typography, Layout, Avatar, Comment, Tooltip, Collapse } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { CaretRightOutlined } from "@ant-design/icons";
import moment from "moment";

const { Title, Text } = Typography;
const { Panel } = Collapse;
const styleTagName = {
  fontSize: "1.35rem",
  fontWeight: "600",
  color: "var(--co-title)",
};
const styleLightTagName = {
  fontSize: "1.35rem",
  color: "var(--co-title)"
};

export default function PostDetail() {
  const dispatch = useDispatch();
  const posts = useSelector(postState$);

  React.useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  const { _id } = useParams();
  const post = posts.find((item) => item._id === _id);
  console.log(post);
  return (
    <Layout style={{backgroundColor: "white", margin: "5rem 8rem", fontSize: "1.4rem"}}>
      <Title level={1} style={{color: "var(--co-main)", textAlign: "center", textTransform: "uppercase", fontFamily: "Jost-Bold" }}>{post.title}</Title>
      <div>
        <Text style={styleTagName}>Author:</Text>
        <Text style={styleLightTagName}>
          <span> </span>
          {post.author}
        </Text>
        <span> | </span>
        <Text style={styleTagName}>Created at:</Text>
        <Text style={styleLightTagName}>
          <span> </span>
          {post.date}
        </Text>
      </div>
        <Text
          style={{
            fontSize: "1.25rem",
            position: "relative",
            marginTop: "2rem",
            textTransform: "capitalize",
            textAlign: "justify"
          }}
        >
          {post.content.substring(0,399)}
          <Title></Title>
          {post.content.substring(399,920)}
          <Title></Title>
          {post.content.substring(920,post.content.length)}
        </Text>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} style={{marginLeft: "-1rem"}}/>
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header={`${post.listCmt.length} comments`}
            key="1"
            className="site-collapse-custom-panel"
            style={{fontSize: "1.4rem", fontWeight: "600", color: "var(--co-title-highlight)", marginTop: "2rem"}}>
            <div>
              {post.listCmt.map((cmt) => (
                <Comment
                author={<a style={{textTransform: "capitalize", fontSize: "1.1rem", color: "var(--co-title)"}}>{cmt.name}</a>}
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      alt="Han Solo"
                    />
                  }
                  content={
                    <p style={{fontSize: "1rem",fontWeight: "500" }}>
                      {cmt.body}
                    </p>
                  }
                  datetime={
                    <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                      <span style={{fontSize: "1rem", color: "var(--co-title)" }}>{moment().fromNow()}</span>
                    </Tooltip>
                  }
                />
              ))}
            </div>
          </Panel>
        </Collapse>
    </Layout>
  );
}
