import React from "react";
import { List, Card, Tag, Collapse, Avatar } from "antd";
import styled from "styled-components";

const tagColors = [
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

const { Panel } = Collapse;
const CustomPanel = styled.div`
  width: 100%;
  .ant-collapse > .ant-collapse-item {
    border-bottom: 0;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    border-bottom: 1px solid grey;
  }
  .ant-collapse-borderless {
    background: white;
  }
  .ant-list {
    width: 100%;
  }
`;

const renderPost = (item: any) => {
  return (
    <List.Item>
      <Card title={item.title}>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            alignItems: "stretch",
            textAlign: "start",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              paddingBottom: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <div>{`Author: ${item.owner}`}</div>
              <div>{`Created at: ${item.created_at}`}</div>
            </div>

            <div>
              {item.tags.map((tag: any, index: number) => (
                <span key={index}>
                  <Tag color={tagColors[index]}>{tag}</Tag>
                </span>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            {item.content}
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            <CustomPanel>
              <Collapse bordered={false}>
                <Panel
                  showArrow={false}
                  header={
                    item.replies.length > 1
                      ? `${item.replies.length} replies`
                      : `${item.replies.length} reply`
                  }
                  key="1"
                >
                  {item.replies.map((reply: any, index: number) => (
                    <div
                      key={index}
                      style={{ display: "flex", paddingBottom: 20 }}
                    >
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          paddingLeft: 10,
                        }}
                      >
                        <div>{reply.created_at}</div>
                        <div>{reply.content}</div>
                        <div>Reply to</div>
                      </div>
                    </div>
                  ))}
                </Panel>
              </Collapse>
            </CustomPanel>
          </div>
        </div>
      </Card>
    </List.Item>
  );
};

function PostList(props: any) {
  const { data } = props;
  return (
    <div style={{ paddingTop: 10 }}>
      <List bordered dataSource={data} renderItem={renderPost} />
    </div>
  );
}

export default PostList;
