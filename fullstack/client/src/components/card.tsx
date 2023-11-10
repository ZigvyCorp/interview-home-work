import { useState } from "react";
import {
  Card,
  Button,
  Flex,
  Avatar,
  Typography,
  Space,
  Col,
  Collapse,
  List,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const data = [
  {
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1",
    title: "Ant Design Title 1",
    content: "Cool",
  },
  {
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2",
    title: "Ant Design Title 2",
    content: "Nice",
  },
  {
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=3",
    title: "Ant Design Title 3",
    content: "Hello",
  },
  {
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=4",
    title: "Ant Design Title 4",
    content: "Hello",
  },
];

const PostCard = () => {
  const [readMore, setReadMore] = useState(false);
  let content: string = "hello";
  return (
    <>
      <Card type="inner" style={{ width: "1000px" }}>
        <Space.Compact direction="vertical">
          <Flex gap="small" align="center">
            <Avatar icon={<UserOutlined />} />
            <Col>
              <h3 style={{ display: "flex", alignItems: "flex-end" }}>Admin</h3>
              <Text type="secondary">Posted on: 01/01/1978</Text>
            </Col>
          </Flex>
          <br />
          <Title level={2}>Hello</Title>
        </Space.Compact>
        <Flex align="center">
          <p style={{ fontSize: "18px" }}>
            {readMore ? content : `${content.substring(0, 100)}`}
          </p>
          {content.length > 100 && (
            <span>
              ...
              <Button type="link" onClick={() => setReadMore(!readMore)}>
                {readMore ? "show less" : "  read more"}
              </Button>
            </span>
          )}
        </Flex>
      </Card>
      <Collapse
        size="small"
        ghost
        items={[
          {
            key: "1",
            label: "Comments",
            children: (
              <>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(
                    item: { avatar: string; title: string; content: string },
                    index: number
                  ) => {
                    return (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src={`${item.avatar}`} />}
                          title={
                            <a href="http://localhost:3000">{item.title}</a>
                          }
                          description={<Text>{item.content}</Text>}
                        />
                      </List.Item>
                    );
                  }}
                />
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default PostCard;
