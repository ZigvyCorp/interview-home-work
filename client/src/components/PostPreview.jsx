import { Button, Flex, List, Space, Tag } from "antd";
import { useEffect, useState, useMemo } from "react";
import { loadCommentsAction } from "../store/actions/homeActions";
import { connect, useDispatch } from "react-redux";

function generateRandomDate(from = new Date(2023, 0, 1), to = new Date()) {
  return new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime())
  ).toDateString();
}

function PostPreview({ post, comments }) {
  const [showComment, setShowComment] = useState(false);
  const dispatch = useDispatch();
  console.log(showComment);
  useEffect(() => {
    if (showComment) {
      dispatch(loadCommentsAction(post.id));
    }
  }, [showComment]);

  const myComments = useMemo(() => {
    const thisPostComments = comments.filter((c) => {
      // console.log(c.postId, c, post.id);
      return c.postId == post.id;
    });
    return thisPostComments;
  }, [comments, post.id]);

  return (
    <List.Item style={{ borderBlockEndWidth: 10 }} key={post.id}>
      {/* <List.Item.Meta
        title={<a href={post.href}>{post.title}</a>}
        description={"Author:" + post.userId}
      /> */}
      <div>
        <h1 style={{ textAlign: "center" }}>{post.title}</h1>
      </div>
      <Flex gap="middle">
        <Flex style={{ margin: 0, width: "70%" }} vertical={"vertical"}>
          <p>Author: {post.userId}</p>
          <p>Created at: {generateRandomDate()}</p>
        </Flex>
        <Flex
          style={{
            margin: 0,
            width: "30%",
            height: "100%",
            justifyContent: "end",
          }}
          vertical={"vertical"}
        >
          <Space size={[0, 8]} wrap>
            <Tag color="success">consult</Tag>
            <Tag color="processing">it</Tag>
            <Tag color="error">hala</Tag>
            <Tag color="warning">gov</Tag>
            <Tag color="default">legal</Tag>
            <Tag color="success">consult</Tag>
            <Tag color="processing">it</Tag>
            <Tag color="success">consult</Tag>
          </Space>
        </Flex>
      </Flex>
      <p> {post.body}</p>
      {!showComment && (
        <Button
          onClick={(e) => {
            e.preventDefault();
            setShowComment(true);
          }}
        >
          show comment
        </Button>
      )}
      {showComment &&
        myComments.map((c) => {
          return <div key={c.id}>{c.id}</div>;
        })}
    </List.Item>
  );
}

const mapStateToProps = (state) => {
  return {
    comments: state.home.comments,
  };
};
export default connect(mapStateToProps, {})(PostPreview);
