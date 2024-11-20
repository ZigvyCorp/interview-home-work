import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postState$ } from "../../redux/selector";
import { Card, List, Typography, Input } from "antd";
import moment from "moment";
import Comments from "../comment/Comments";

const PostList = () => {
  const [searchedText, setSearchedText] = useState(null);
  const dispatch = useDispatch();
  const posts = useSelector(postState$);

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  const onSearch = (value) => {
    const filterData = posts.filter((o) =>
      Object.keys(o).some((k) =>
        String(o[k]).toLowerCase().includes(value.toLowerCase())
      )
    );
    setSearchedText(filterData);
  };
  return (
    <>
      <Input.Search
        enterButton="Search"
        placeholder="Seach here..."
        style={{ marginBottom: 8 }}
        onSearch={(value) => {
          setSearchedText(value);
        }}
      />
      <List
        grid={{ column: 1 }}
        onSearch={onSearch}
        dataSource={searchedText === null ? posts : searchedText}
        renderItem={(post, index) => {
          return (
            <>
              <Card title={post?.title} key={post._id}>
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      Author :{post?.author}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      CreatedAt :
                      {moment(post?.createdAt).format("HH:MM MMM DD ,YYYY")}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
                <Card.Meta
                  title={
                    <Typography.Paragraph
                      ellipsis={{ rows: 1, expandable: true, symbol: "More" }}
                    >
                      Content :{post?.content}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
                <Comments
                  comments={[
                    {
                      id: 1,
                      name: "Thang Tran :",
                      content: "Blog rất tuyệt",
                      createdAt: new Date(),
                    },
                    {
                      id: 2,
                      name: "Soul Tran",
                      content: "Khá là hay cho chủ đề này",
                      createdAt: new Date(),
                    },
                  ]}
                />
              </Card>
            </>
          );
        }}
      ></List>
    </>
  );
};

export default PostList;
