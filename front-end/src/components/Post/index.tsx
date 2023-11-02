import React from "react";

import { Button, Flex, Typography, Card, Space, Collapse, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { IPost } from "../../types/posts";
import type { CSSProperties } from "react";

import type { CollapseProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../Comment";
import {
  getCommentsErrorSelector,
  getCommentsPendingSelector,
  getCommentsSelector,
} from "../../store/comments/selectors";
import { getCommentsByPostIdRequest } from "../../actions/comments";
import { IComment } from "../../types/comments";

const getItems: (
  panelStyle: CSSProperties,
  comments: IComment[],
  id: string
) => CollapseProps["items"] = (panelStyle, comments, id) => [
  {
    key: id,
    label: `${comments.length} replies`,
    children: (
      <>
        {comments.map((comment) => (
          <Comment {...comment} key={comment._id} />
        ))}
      </>
    ),
    style: panelStyle,
  },
];

function Post({ _id, title, owner, created_at, tags, content }: IPost) {
  const { token } = theme.useToken();
  const dispatch = useDispatch();
  const comments = useSelector(getCommentsSelector);
  const parsedComments = comments.filter((comment) => comment.post === _id);

  const panelStyle: React.CSSProperties = {
    marginBottom: token.size,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  React.useEffect(() => {
    dispatch(getCommentsByPostIdRequest(_id));
  }, [dispatch, _id]);

  return (
    <Card
      key={_id}
      title={title}
      headStyle={{
        textAlign: "center",
      }}
    >
      <Flex
        style={{
          marginBottom: token.margin,
        }}
        justify="space-between"
        align="flex-start"
      >
        <Space direction="vertical">
          <Typography>Author: {owner.name}</Typography>
          <Typography>Created at: {created_at}</Typography>
        </Space>

        <Space>
          {tags.map((tag) => (
            <Button key={tag} type="default" size="small">
              {tag}
            </Button>
          ))}
        </Space>
      </Flex>

      <Space>
        <Typography
          style={{
            textAlign: "justify",
            marginBottom: "12px",
          }}
        >
          {content}
        </Typography>
      </Space>

      <Collapse
        bordered={false}
        // defaultActiveKey={[_id]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{ background: "#fff" }}
        items={getItems(panelStyle, parsedComments, _id)}
      />
    </Card>
  );
}

export default Post;
