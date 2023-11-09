import React from "react";
import { Layout, Space, Menu, Avatar, List, Collapse } from "antd";
import UserMenu from "./userInfo";
import postData from "../../../data/posts.json";
import comment from "../../../data/comments.json";
import userInfo from "../../../data/users.json";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const { Panel } = Collapse;
const data = { postData };
interface AnotherComponentProps {
  userName: string;
}
const Home: React.FC<AnotherComponentProps> = () => {
  return (
    <Layout>
      {/* header */}
      <div>
        <div className="logo" />
        <Menu mode="horizontal">
          <UserMenu />

          <Menu.Item key="item1" colSpan={2}>
            Item 1 (2 columns)
          </Menu.Item>
          <Menu.Item key="item2">Item 2 (1 column)</Menu.Item>
          <Menu.Item key="item3" colSpan={3}>
            Item 3 (3 columns)
          </Menu.Item>
        </Menu>
      </div>

      <Content style={{ padding: "100px 50px" }}>
        <List
          itemLayout="vertical"
          size="default"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 2,
          }}
          dataSource={postData}
          renderItem={(item, index) => (
            <List.Item
              key={item.title}
              actions={[
                <Collapse defaultActiveKey={["0"]}>
                  <Panel header="2 replies" key="1">
                    <List
                      itemLayout="horizontal"
                      dataSource={comment}
                      renderItem={(item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                              />
                            }
                          />
                          {item.content}
                        </List.Item>
                      )}
                    />
                  </Panel>
                </Collapse>,
              ]}
            >
              <List.Item.Meta
                title={<a>{item.title}</a>}
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                description={
                  <div>
                    {item.tags.length > 0
                      ? item.tags.join(", ")
                      : "No tags available"}
                  </div>
                }
              />
              {item.content}
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};
export default Home;
