import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Tag } from "antd";
import { clientApi } from "../../services/clientApi";
import { Layout, Pagination } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, List, Collapse } from "antd";
export default function Home() {
  const { Panel } = Collapse;
  const { data, comments } = useSelector((reduxData) => reduxData.taskReducer);
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const { Header, Footer, Sider, Content } = Layout;
  const dispatch = useDispatch();
  useEffect(() => {
    const LoadPost = async () => {
      const response = await clientApi.getAll("posts");
      dispatch({
        type: "BLOG",
        data: response.data,
      });
      setTotal(response.data.length);
      localStorage.setItem("Blog", data);
    };
    const LoadComments = async () => {
      const response = await clientApi.getAll("comments?_page=1");
      dispatch({
        type: "COMMENTS",
        comments: response.comments,
      });
    };
    LoadPost();
    LoadComments();
  }, []);
  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPost = data.slice(indexOfFirstPage, indexOfLastPage);
  const currentYear = new Date().getFullYear();
  const date = new Date().getDate();
  const month = new Date().getMonth();
  return (
    <>
      <Layout>
        <Header id="header">
          <div className="header-wrapper">
            <div className="header-container__left">
              <h1 className="logo">Logo</h1>
            </div>
            <div className="header-container__center">
              <h1 className="center-title">Blog</h1>
            </div>
            <div className="header-container__right">
              <Avatar
                shape="square"
                size={64}
                icon={<UserOutlined />}
                className="avatar"
              />
            </div>
          </div>
        </Header>
        {currentPost.map((post, index) => {
          return (
            <div>
              <Content className="blog-section">
                <div className="content">
                  <h1>{post.title}</h1>
                  <div className="blog-header">
                    <div className="blog-header_left">
                      <p>Author: {post.userId}</p>
                      <p>
                        Created at: {date}/{month}/{currentYear}{" "}
                      </p>
                    </div>
                    <div className="blog-header_right">
                      <Divider id="tag" orientation="right"></Divider>
                      <div>
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
                    </div>
                  </div>
                  <div className="article">
                    <p>{post.body}</p>
                  </div>
                  <div className="comment">
                    <Collapse defaultActiveKey={["1"]} ghost>
                      <Panel id="header-comment" header="Comments" key="1">
                        <List
                          itemLayout="horizontal"
                          dataSource={data}
                          renderItem={(item) => (
                            <List.Item>
                              <List.Item.Meta
                                avatar={
                                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                                }
                                title={
                                  <a href="https://ant.design">{item.title}</a>
                                }
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                              />
                            </List.Item>
                          )}
                        />
                      </Panel>
                    </Collapse>
                  </div>
                </div>
              </Content>
            </div>
          );
        })}
        <Footer id="footer">
          <Pagination
            onChange={(value) => setPage(value)}
            pageSize={postPerPage}
            total={total}
            current={page}
          />
        </Footer>
      </Layout>
    </>
  );
}
