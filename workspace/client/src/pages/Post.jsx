import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostStart } from "../redux/posts/postsSlice";
import { Card, Collapse, Skeleton } from "antd";
import Comments from "../components/Comments";
import { resetComments, setPostId } from "../redux/comments/commentsSlice";

export default function Post() {
  const { id } = useParams();
  const { post, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostStart(id));
    dispatch(resetComments());
    dispatch(setPostId(id));
  }, [dispatch, id]);
  if (loading) {
    return <Skeleton active />;
  }

  if (!post) {
    return <div>No Post Found</div>;
  }
  const items = [
    {
      key: "1",
      label: "Comments",
      children: (
        <div>
          <Comments />
        </div>
      ),
    },
  ];
  return (
    <div className="container p-10 min-h-screen">
      <Card
        title={post.title}
        extra={<span>Author: {post.author}</span>}
        style={{ width: "100%" }}
      >
        <Card.Meta
          description={`Posted by ${post.author} on ${new Date(
            post.createdAt
          ).toLocaleDateString()}`}
        />
        <div style={{ marginTop: 20 }}>
          <p>{post.body}</p>
          <Collapse items={items} bordered={false} />
        </div>
      </Card>
    </div>
  );
}
