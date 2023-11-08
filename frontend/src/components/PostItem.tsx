import React, { useCallback, useState } from "react";
import { IPost } from "../types";
import {
  Button,
  Card,
  Flex,
  Space,
  Tag,
  Typography,
  Collapse,
  List,
} from "antd";
import { CommentOutlined } from "@ant-design/icons";
import moment from "moment";
import { generateRandomColor } from "../utils";

import CommentsJson from "./../mock/comments.json";
import { CommentItem } from "../components/CommentItem";

const { Paragraph } = Typography;
const { Panel } = Collapse;
interface IPostItemProps {
  post: IPost;
  extra?: React.ReactNode;
}
const PostItem: React.FC<IPostItemProps> = (props) => {
  const { post, extra } = props;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const renderHeader = useCallback(
    (
      author: string = "Khiem NV",
      createdAt?: number,
      tags: string[] = ["apple", "pear", "banana"]
    ) => (
      <Flex justify="space-between">
        <Flex vertical flex={1}>
          <div>Author: {author}</div>
          <div>Created: {moment(createdAt).format("YYYY-MM-DD HH:mm")}</div>
        </Flex>
        <Flex flex={1} justify="end">
          <Space size={[0, "small"]} wrap>
            {tags.map((t) => {
              return <Tag color={generateRandomColor()}>{t}</Tag>;
            })}
          </Space>
        </Flex>
      </Flex>
    ),
    [post]
  );

  const renderContent = (content: string) => (
    <Flex>
      <Paragraph ellipsis={{ rows: 3, expandable: true }}>{content}</Paragraph>
    </Flex>
  );

  const renderComments = (count: number) => (
    <Flex vertical>
      <Button type="link" onClick={toggleCollapse}>
        <CommentOutlined /> {count} relies
      </Button>
      <Collapse ghost activeKey={isCollapsed ? [] : ["1"]}>
        <Panel header="" key="1" showArrow={false}>
          <List
            itemLayout="horizontal"
            dataSource={CommentsJson}
            renderItem={(item, index) => (
              <CommentItem comment={item} index={index} />
            )}
          />
        </Panel>
      </Collapse>
    </Flex>
  );

  return (
    <Card title={post.title} extra={extra} style={{ marginTop: "8px" }}>
      {renderHeader(post.owner, post.created_at, post.tags)}
      {renderContent(post.content)}
      {renderComments(4)}
    </Card>
  );
};

export { PostItem };
