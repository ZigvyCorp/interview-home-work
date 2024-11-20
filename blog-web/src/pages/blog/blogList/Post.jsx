import { useState } from "react";
import { Pagination, List, Card, Collapse, Flex, Button } from "antd";
import { Col, Row } from "antd";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BlogList.module.scss";
import { formatDate } from "~/untils/convertTimeZone";
import CommentList from "../commentList/CommentList";

import {
  getCommentsByPostIDRequest,
} from "~/redux/actions/commentActions";
import {
  selectComments,
  selectCommentsLoading,
} from "~/redux/reducers/commentReducer";

const cx = classNames.bind(styles);
const PAGE_SIZE = 1;
const { Panel } = Collapse;
const tagColors = ["blue", "green", "red", "orange", "purple"];
function Post(props) {
  const { posts } = props;

  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const [currentPage] = useState(1);

  const createSummary = (content) => {
    const summary = content.slice(0, 100) + "...";
    return summary;
  };
  const isLoading = useSelector(selectCommentsLoading);
  const fetchComments = async (postID) => {
    dispatch(getCommentsByPostIDRequest(postID, {page: currentPage, perPage: PAGE_SIZE}));
  };

  const handlePageChange = (page, postID) => {
    dispatch(getCommentsByPostIDRequest(postID, {page: page, perPage: PAGE_SIZE}));
  };

  const findCommentByPostID = (postID) => {
    return comments.find((comment) => comment.postID === postID) || {};
  }

  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={posts}
      renderItem={(post, index) => (
        <List.Item>
          <Card>
            <div className={cx("blog-tile")}>
              <h3 className={cx("title")}>{post.title}</h3>
            </div>
            <Row gutter={16}>
              <Col xs={24} md={12} lg={12}>
                <div>
                  <p className={cx("author")}>Author: {post.userInfo.name}</p>
                  <p className={cx("create-at")}>
                    Create at: {formatDate(post.created_at)}
                  </p>
                </div>
              </Col>
              <Col xs={24} md={12} lg={12}>
                <Flex
                  wrap="wrap"
                  gap="small"
                  className={cx("tags")}
                >
                  {post.tags.map((tag, index) => {
                    const tagColor = tagColors[index % tagColors.length];
                    return (
                      <Button
                        key={index}
                        type="primary"
                        ghost
                        style={{ color: tagColor }}
                      >
                        {tag}
                      </Button>
                    );
                  })}
                </Flex>
              </Col>
            </Row>
            <p className={cx("description")}>{createSummary(post.content)}</p>
            <Collapse ghost key={index}>
              <Panel
                style={{ padding: 0, marginTop: 12 }}
                header={
                  <span className={cx("reply")} onClick={() => fetchComments(post._id)}>
                    {post.numberOfComments} Reply
                  </span>
                }
                key={post.id}
                showArrow={true}
              >
                <CommentList comments={findCommentByPostID(post._id).data || []}/>

                {!isLoading && (
                  <Pagination
                    className="center"
                    current={findCommentByPostID(post._id).page || 1}
                    total={
                      findCommentByPostID(post._id).total || 1
                    }
                    pageSize={PAGE_SIZE}
                    onChange={(page) => handlePageChange(page, post._id)}
                  />
                )}
              </Panel>
            </Collapse>
          </Card>
        </List.Item>
      )}
    />
  );
}

Post.propTypes = {
  posts: PropTypes.array,
};

export default Post;
