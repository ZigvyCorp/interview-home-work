import React from "react";

import { Button, Flex, Typography, Card, Space, Collapse, theme } from "antd";
import { CaretRightOutlined, DeleteOutlined } from "@ant-design/icons";
import { IPost } from "../../types/posts";
import type { CSSProperties } from "react";

import type { CollapseProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../Comment";
import { getCommentsSelector } from "../../store/comments/selectors";
import { getCommentsByPostIdRequest } from "../../actions/comments";
import { IComment } from "../../types/comments";
import { deletePostRequest } from "../../actions/posts";
import {
  getPostsPendingSelector,
  getPostsSelector,
} from "../../store/posts/selectors";
import EditPostButton from "../EditPostButton";
import moment from "moment";
import { useIsSearchContext } from "../../contexts/IsSearch";

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

function Post({ _id, title, owner, createdAt, tags, content }: IPost) {
  const { token } = theme.useToken();
  const dispatch = useDispatch();
  const comments = useSelector(getCommentsSelector);
  const posts = useSelector(getPostsSelector);
  const pending = useSelector(getPostsPendingSelector);
  const parsedComments = comments.filter((comment) => comment.post === _id);
  const isSearch = useIsSearchContext();

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
    <>
      <Card
        key={_id}
        title={title}
        style={{
          minWidth: token.screenLG,
        }}
        extra={
          <Space>
            <EditPostButton
              _id={_id}
              content={content}
              createdAt={createdAt}
              owner={owner}
              tags={tags}
              title={title}
            />
            <Button
              disabled={pending}
              onClick={() => {
                isSearch.current = false;
                dispatch(deletePostRequest(_id));
                if (posts.length === 1) window.location.reload();
              }}
              icon={<DeleteOutlined />}
            >
              Delete
            </Button>
          </Space>
        }
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
            <Typography>
              Created at: {moment(createdAt).format("YYYY/MM/d, h:mm:ss A")}
            </Typography>
          </Space>

          <Space>
            {tags.map((tag, i) => (
              <Button key={i} type="default" size="small">
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
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{ background: "#fff" }}
          items={getItems(panelStyle, parsedComments, _id)}
        />
      </Card>
    </>
  );
}

export default Post;
