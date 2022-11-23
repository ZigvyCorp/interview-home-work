import "../App.css";
import React from "react";
import {
  Typography,
  Tag,
  Col,
  Row,
  Collapse,
  Space,
  Divider,
  Avatar,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph, Link } = Typography;
const { Panel } = Collapse;

function Posts(props) {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <div className="content">
        <div className="post-header">
          <Title level={2}>{props.title}</Title>
        </div>
        <div className="post-content">
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Row>
              <Col span={19}>
                <Title level={5}>Author:{props.author}</Title>
                <Title level={5}>Created at: Nov 22, 2022</Title>
              </Col>
              <Col span={5}>
                <div className="tags">
                  <Tag color="magenta">magenta</Tag>
                  <Tag color="red">red</Tag>
                  <Tag color="volcano">volcano</Tag>
                  <Tag color="orange">orange</Tag>
                  <Tag color="gold">gold</Tag>
                  <Tag color="lime">lime</Tag>
                  <Tag color="green">green</Tag>
                  <Tag color="cyan">cyan</Tag>
                  <Tag color="blue">blue</Tag>
                  <Tag color="geekblue">geekblue</Tag>
                  <Tag color="purple">purple</Tag>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Paragraph>{props.body.substring(0, 100)} ...</Paragraph>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Collapse
                  defaultActiveKey={[""]}
                  onChange={onChange}
                  style={{}}
                >
                  <Panel
                    showArrow={false}
                    header={props.comments.length + " comments"}
                    key="1"
                  >
                    <Space direction="vertical" size="small">
                      {props.comments.map((comment) => {
                        return (
                          <>
                            <Row>
                              <Col span={1}>
                                <Avatar
                                  style={{ backgroundColor: "#87d068" }}
                                  size="large"
                                  icon={<UserOutlined />}
                                />
                              </Col>
                              <Col span={23}>
                                <Row>
                                  <Space direction="vertical" size="small">
                                    <Col span={24}>
                                      <Space size="middle">
                                        <Text strong type="secondary">
                                          {comment.name}
                                        </Text>
                                        <Text italic type="secondary">
                                          a day ago
                                        </Text>
                                      </Space>
                                    </Col>
                                    <Col span={24}>
                                      <Text>{comment.body}</Text>
                                    </Col>

                                    <Col span={24}>
                                      <Link type="secondary">Reply to</Link>
                                    </Col>
                                  </Space>
                                </Row>
                              </Col>
                            </Row>
                            <Divider />
                          </>
                        );
                      })}
                    </Space>
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </Space>
        </div>
      </div>
    </>
  );
}

export default Posts;
