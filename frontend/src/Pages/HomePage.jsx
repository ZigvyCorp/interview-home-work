import React, { useEffect, useState } from "react";
import { UploadOutlined, UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Input } from "antd";

import PostItem from "../components/PostItem";
import InfiniteScroll from "react-infinite-scroll-component";
import http from "../config/config.js";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_POSTS, SET_POSTS } from "../redux/constant.js";

const { Header, Sider, Content } = Layout;
//const onSearch = (value, _e, info) => {console.log(info?.source, value); }

export default function HomePage() {
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(true);
  const [searchParams, setSearcParams] = useSearchParams();
  const keyword = searchParams.get("search");
  
  const posts = useSelector((state) => {
    return state.postsReducer.posts;
  });

  const [searchInput, setSearchInput] = useState(keyword || "");
  
  let page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    if (searchInput.trim() == "") {
      http
        .get(`/post/get-post?page=1`)
        .then((res) => {
          dispatch({ type: SET_POSTS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchInput]);

  const handleSearch = () => {
    if (searchInput.trim() != "") {
      http
        .get(`/post/get-post-by-title?search=${searchInput}`)
        .then((res) => {
          dispatch({ type: SEARCH_POSTS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
       http
        .get(`/post/get-post?page=1`)
        .then((res) => {
          dispatch({ type: SET_POSTS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleOnChange = (e) => {
    let searchKey;
    let { value } = e.target;
    if (value.trim() != "") {
      searchKey = {
        search: value,
      };
    }
    setSearcParams(searchKey, { replace: true });
    setSearchInput(value);
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      const nextPage = page + 1;
      let pageKey = {
        page: nextPage,
      };

      setSearcParams(pageKey, { replace: true });
      page = nextPage;
      if (searchInput.trim() == "") {
        http
          .get(`/post/get-post?page=${page}`)
          .then((res) => {
            if (res.data.length > 0) {
              dispatch({ type: SET_POSTS, payload: res.data });
            } else {
              setHasMore(false);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, 1000);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="bg-info-subtle">
      <Layout>
        <Sider trigger={null} collapsible className="fixed-top">
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Home Page",
              },
              {
                key: "2",
                icon: <UserOutlined />,
                label: "UserName",
              },

              {
                key: "3",
                icon: <UploadOutlined />,
                label: ".......",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <div className="text-success fs-1 text-center">Blogs</div>
          </Header>
          <div className="mt-5 px-3 input-group">
            <input
              className="form-control"
              placeholder="input search text"
              onChange={handleOnChange}
            />
            <button
              className=" btn btn-outline-secondary"
              onClick={handleSearch}
            >
              search
            </button>
          </div>
          <Content
            style={{
              margin: "24px 16px",
              padding: 50,
              minHeight: 10,
              background: colorBgContainer,
            }}
          >
            <InfiniteScroll
              dataLength={posts.length}
              next={fetchMoreData}
              hasMore={hasMore}
              lodader={<p>Loading .....</p>}
            >
              {posts?.length > 0 ? (
                posts.map((item) => {
                  return (
                    <div className="py-3">
                      <PostItem key={item.id} item={item} />
                    </div>
                  );
                })
              ) : (
                <p>No data</p>
              )}
            </InfiniteScroll>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
