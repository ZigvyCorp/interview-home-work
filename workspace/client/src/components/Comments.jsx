import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { List, Button, Typography, Avatar } from "antd";
import { fetchCommentsStart } from "../redux/comments/commentsSlice";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Comments = () => {
  const dispatch = useDispatch();

  const { comments, loading, skip, limit, hasMore, postId } = useSelector(
    (state) => state.comments
  );
  useEffect(() => {
    if (postId) dispatch(fetchCommentsStart({ skip, limit, postId }));
  }, [postId]);

  const onLoadMore = () => {
    dispatch(fetchCommentsStart({ skip, limit, postId }));
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

  return (
    <div className="container m-auto px-10 mb-10">
      <h1 className="my-3 text-center font-bold">Comments</h1>
      <List
        loading={loading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={comments}
        renderItem={(comment) => (
          <List.Item key={comment.id}>
            <List.Item.Meta
              title={<span className="font-semibold">{comment.email}</span>}
              avatar={<Avatar size={64} icon={<UserOutlined />} />}
              description={
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Text>{comment.createdAt}</Text>
                  </div>
                  <Text>{comment.body}</Text>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Comments;
