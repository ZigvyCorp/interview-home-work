import {
  Row,
  Col,
  Card,
  Avatar,
  Divider,
  List,
  Affix,
  Button,
  Skeleton,
  Spin,
} from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import avatar from "../.././assets/react.svg";
import { PostCard, AvatarComment } from "./PostCard/PostCard";
import { User } from "../../data/data";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../../redux/actions/postActions";
const HomeComponent = () => {
  const dispatch = useDispatch();
  const usenavigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      usenavigate("/login");
    }
    dispatch(fetchPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts);
  console.log("Posts", posts);

  return (
    <>
      <Row gutter={[24, 0]}>
        {/* <Col span={24} md={6} className="mb-24">
          <Affix offsetTop={10}>
            <Card
              bordered={false}
              bodyStyle={{ paddingTop: 0 }}
              className="header-solid h-full  ant-list-yes"
              title={<h6 className="font-semibold m-0">Other people</h6>}
            >
              <InfiniteScroll
                dataLength={User.length}
                next={User}
                hasMore={User.length < 1}
                loader={
                  <Skeleton
                    avatar
                    paragraph={{
                      rows: 1,
                    }}
                    active
                  />
                }
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
              >
                <List
                  dataSource={User}
                  renderItem={(item) => (
                    <List.Item key={item.email}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href="#">{item.username}</a>}
                        description={item.email}
                      />
                    </List.Item>
                  )}
                />
              </InfiniteScroll>
            </Card>
          </Affix>
        </Col> */}
        <Col span={24} md={12} className="mb-24" offset={6}>
          <Row gutter={[24, 10]}>
            <Button
              onClick={() => {
                setModalCreate(true);
              }}
              type="text"
              block
              style={{ borderRadius: "20px" }}
            >
              What are you thinking ?
            </Button>

            {posts.posts.map((i, index) => (
              <PostCard
                postID={i.id}
                key={"index" + index}
                countComment={i.comment_count}
                title={i.title}
                username={i.owner}
                avatar={avatar}
                image={avatar}
                detail={i.content}
                time={i.created_at}
              />
            ))}
          </Row>
        </Col>
        {/* <Col span={24} md={6} className="mb-24">
          <Affix offsetTop={10}>
            <Card
              bordered={false}
              bodyStyle={{ paddingTop: 0 }}
              className="header-solid h-full  ant-list-yes"
              title={<h6 className="font-semibold m-0">Other people</h6>}
            >
              <InfiniteScroll
                dataLength={User.length}
                next={User}
                hasMore={User.length < 1}
                loader={
                  <Skeleton
                    avatar
                    paragraph={{
                      rows: 1,
                    }}
                    active
                  />
                }
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
              >
                <List
                  dataSource={User}
                  renderItem={(item) => (
                    <List.Item key={item.email}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href="#">{item.username}</a>}
                        description={item.email}
                      />
                    </List.Item>
                  )}
                />
              </InfiniteScroll>
            </Card>
          </Affix>
        </Col> */}
      </Row>
    </>
  );
};
export default HomeComponent;
