import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/postAction";
import PostItem from "../PostItem";
import { Input, Pagination } from "antd";
import "./index.scss";
const Post = () => {
  const dispatch = useDispatch();
  const postObject = useSelector((state) => state.postReducer.data);
  const posts = Object.values(postObject || []);

  React.useEffect(() => {
    dispatch(getPosts());
  }, []);

  const { Search } = Input;

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Search
          addonBefore="Post"
          placeholder="search"
          allowClear
          onSearch={(e) => dispatch(getPosts(e))}
          style={{ width: 304 }}
        />
      </div>
      {posts?.map((post, index) => {
        return (
          <div key={`post_${index}`}>
            <PostItem id={index + 1} post={post} />
          </div>
        );
      })}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "30px"}}
      >
      <Pagination
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
        onChange={(page, pageSize) => {
          if(Boolean(page) && Boolean(pageSize)) {
            const perpage = pageSize * page
            dispatch(getPosts(null,page,perpage));
          }
          }}
      />
      </div>
    </div>
  );
};
export default Post;
