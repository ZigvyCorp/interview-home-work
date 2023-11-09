import { Row, Col, Skeleton } from "antd";
import { PostItem } from "../../components/PostItem";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostDetailAsync } from "../../redux/saga/postSaga";

const PostDetailPage = () => {
  const params = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.post.post);
  useEffect(() => {
    dispatch(
      fetchPostDetailAsync({
        id: Number(params.id) || 0,
      })
    );
  }, [params.id]);
  return (
    <Row gutter={16}>
      <Col span={24}>
        <Skeleton paragraph={{ rows: 2 }} loading={loading}>
          {data && <PostItem post={data} />}
        </Skeleton>
      </Col>
    </Row>
  );
};

export default PostDetailPage;
