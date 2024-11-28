import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPostsStart } from "../redux/posts/postsSlice";
import { Link } from "react-router-dom";
import { CommentOutlined } from "@ant-design/icons";
import { List, Button, Typography, Modal } from "antd";
import Comments from "../components/Comments";
import { resetComments, setPostId } from "../redux/comments/commentsSlice";

const { Text } = Typography;

const Home = () => {
  const dispatch = useDispatch();
  const [isOpenModal, setOpenModal] = useState(false);
  const { posts, loading, skip, limit, hasMore } = useSelector(
    (state) => state.posts
  );
  useEffect(() => {
    dispatch(fetchPostsStart({ skip, limit }));
  }, []);

  const onLoadMore = () => {
    dispatch(fetchPostsStart({ skip, limit }));
  };

  const loadMore =
    !loading && hasMore ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>Load more</Button>
      </div>
    ) : null;
  const handleClose = async () => {
    dispatch(resetComments());
    setOpenModal(false);
  };
  return (
    <div className="container m-auto px-10 mb-10 max-w-screen-md">
      <h1 className="my-3 text-center font-bold">Posts</h1>
      <List
        loading={loading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={posts}
        renderItem={(post) => (
          <List.Item key={post.id}>
            <List.Item.Meta
              title={
                <Link className="font-semibold" to={`/post/${post.id}`}>
                  {post.title}
                </Link>
              }
              description={
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Text className="font-semibold opacity-50">
                      {post.author}
                    </Text>
                    <Text>{new Date(post.createdAt).toLocaleDateString()}</Text>
                  </div>
                  <Text>{post.body.slice(0, 100)}...</Text>
                </div>
              }
            />
            <div
              className="flex gap-1 cursor-pointer"
              onClick={() => {
                setOpenModal(!isOpenModal);
                dispatch(setPostId(post.id));
              }}
            >
              <CommentOutlined />
              <span>{post.commentCount}</span>
            </div>
          </List.Item>
        )}
      />
      <Modal
        title="Comments"
        open={isOpenModal}
        onCancel={handleClose}
        footer={null}
      >
        <Comments />
      </Modal>
    </div>
  );
};

export default Home;
