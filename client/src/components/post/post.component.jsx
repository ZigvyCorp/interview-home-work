import React from 'react';
import { Typography, Tag, Col, Row, Collapse, Space, Divider, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../../App.css';
const moment = require('moment');

const { Title, Text, Paragraph, Link } = Typography;
const { Panel } = Collapse;

const Post = (props) => {
    return (
        <div className="content">
            <div className="post-header">
                <Title level={2}>{props.title}</Title>
            </div>
            <div className="post-content">
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    <Row>
                        <Col span={19}>
                            <Title level={5}>Author: {props.author}</Title>
                            <Title level={5}>
                                Created at: {moment(props.createdAt).format('ll')}
                            </Title>
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
                            <Paragraph>{props.content} ...</Paragraph>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Collapse defaultActiveKey={['']} style={{}}>
                                <Panel
                                    showArrow={false}
                                    header={props.comments.length + ' comments'}
                                    key="1"
                                >
                                    <Space direction="vertical" size="small">
                                        {props.comments.map((comment) => {
                                            return (
                                                <div key={comment._id}>
                                                    <Row>
                                                        <Col span={1}>
                                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                                        </Col>
                                                        <Col span={23}>
                                                            <Row>
                                                                <Space
                                                                    direction="vertical"
                                                                    size="small"
                                                                >
                                                                    <Col span={24}>
                                                                        <Space size="middle">
                                                                            <Text
                                                                                strong
                                                                                type="secondary"
                                                                            >
                                                                                {
                                                                                    comment.owner
                                                                                        ?.name
                                                                                }
                                                                            </Text>
                                                                            <Text
                                                                                italic
                                                                                type="secondary"
                                                                            >
                                                                                a day ago
                                                                            </Text>
                                                                        </Space>
                                                                    </Col>
                                                                    <Col span={24}>
                                                                        <Text>
                                                                            {comment.content}
                                                                        </Text>
                                                                    </Col>

                                                                    <Col span={24}>
                                                                        <Link type="secondary">
                                                                            Reply to
                                                                        </Link>
                                                                    </Col>
                                                                </Space>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    <Divider />
                                                </div>
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
    );
};

export default Post;
