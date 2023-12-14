import { useEffect } from "react";
import { Card, Row, Col, Spin } from "antd";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";

import styles from "./BlogDetail.module.scss";
import { useParams } from "react-router-dom";
import {
  selectError,
  selectLoading,
  selectPostById,
} from "~/redux/reducers/postReducer";
import { getPostByIdRequest } from "~/redux/actions/postActions";
import { convertToVietnamTime } from "~/untils/convertTimeZone";
import CommentList from "../commentList/CommentList";

const cx = classNames.bind(styles);
function BlogDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const post = useSelector(selectPostById);

  useEffect(() => {
    dispatch(getPostByIdRequest(id));
  }, [dispatch, id]);

  if (error) {
    return <div className={cx("danger")}>Post not found!!!!</div>;
  }
  return (
    <div className={cx("wrapper")}>
      {loading ? (
        <div className="fix-center">
          <Spin justify="center" size="large" />
        </div>
      ) : (
        <div>
          <h1 className={cx("blog-detail")}>Blog Detail</h1>
          <Row gutter={16}>
            <Col xs={{ span: 24 }} md={{ span: 8 }}>
              <Card title={post?.title} bordered={false}>
                <div>
                  <p>
                    <strong>Author:</strong> {post?.owner?.name}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {post?.createdAt && convertToVietnamTime(post.createdAt)}
                  </p>
                </div>
                <div className={cx("comments")}>
                  <CommentList comments={post?.comments} />
                </div>
              </Card>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              <Card title="Content" bordered={false}>
                <p>{post?.content}</p>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
