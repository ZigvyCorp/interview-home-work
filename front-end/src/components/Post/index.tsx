import React from "react";

import { Button, Flex, Typography, Card, Space, theme, Collapse } from "antd";
import type { CSSProperties } from "react";
import { CaretRightOutlined } from "@ant-design/icons";

import type { CollapseProps } from "antd";
import Comment from "../Comment";

import {
  getErrorSelector,
  getPendingSelector,
  getPostsSelector,
} from "../../store/posts/selectors";

import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest } from "../../actions/posts";

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "2 replies",
    children: (
      <>
        <Comment />
        <Comment />
      </>
    ),
    style: panelStyle,
  },
];

function Post() {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: token.size,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const posts = useSelector(getPostsSelector);
  const error = useSelector(getErrorSelector);

  React.useEffect(() => {
    dispatch(getPostsRequest());
  }, [dispatch]);

  console.log(pending, posts, error);

  return (
    <Card
      title="Card Title"
      headStyle={{
        textAlign: "center",
      }}
    >
      <div>{JSON.stringify(posts)}</div>
      <Flex
        style={{
          marginBottom: token.margin,
        }}
        justify="space-between"
        align="flex-start"
      >
        <Space direction="vertical">
          <Typography>Author: John Smith</Typography>
          <Typography>Created at: Sep 20, 2018</Typography>
        </Space>

        <Space>
          <Button type="default" size="small">
            red
          </Button>
          <Button type="default" size="small">
            red
          </Button>
          <Button type="default" size="small">
            red
          </Button>
          <Button type="default" size="small">
            red
          </Button>
        </Space>
      </Flex>

      <Space>
        <Typography
          style={{
            textAlign: "justify",
            marginBottom: "12px",
          }}
        >
          Unfeeling so rapturous discovery he exquisite. Reasonably so
          middletons or impression by terminated. Old pleasure required removing
          elegance him had. Down she bore sing saw calm high. Of an or game gate
          west face shed. ﻿no great but music too old found arose. Seen you eyes
          son show. Far two unaffected one alteration apartments celebrated but
          middletons interested. Described deficient applauded consisted my me
          do. Passed edward two talent effect seemed engage six. On ye great do
          child sorry lived. Proceed cottage far letters ashamed get clothes
          day. Stairs regret at if matter to. On as needed almost at basket
          remain. By improved sensible servants children striking in surprise.
          Or kind rest bred with am shed then. In raptures building an bringing
          be. Elderly is detract tedious assured private so to visited. Do
          travelling companions contrasted it. Mistress strongly remember up to.
          Ham him compass you proceed calling detract. Better of always missed
          we person mr. September smallness northward situation few her
          certainty something. Built purse maids cease her ham new seven among
          and. Pulled coming wooded tended it answer remain me be. So landlord
          by we unlocked sensible it. Fat cannot use denied excuse son law.
          Wisdom happen suffer common the appear ham beauty her had. Or
          belonging zealously existence as by resources
        </Typography>
      </Space>

      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{ background: "#fff" }}
        items={getItems(panelStyle)}
      />
    </Card>
  );
}

export default Post;
