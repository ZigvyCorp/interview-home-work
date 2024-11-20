import { List, Card, Collapse, Flex, Button } from "antd";
import { Col, Row } from "antd";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./BlogList.module.scss";
import { convertToVietnamTime } from "~/untils/convertTimeZone";
import { Link } from "react-router-dom";
import CommentList from "../commentList/CommentList";

const cx = classNames.bind(styles);
const { Panel } = Collapse;
const tagColors = ["blue", "green", "red", "orange", "purple"];
function Post(props) {
  const { posts } = props;
  const createSummary = (content) => {
    const summary = content.slice(0, 100) + "...";
    return summary;
  };
  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={posts}
      renderItem={(post) => (
        <List.Item>
          <Card>
            <div className={cx("blog-tile")}>
              <h3 className={cx("title")}>{post.title}</h3>
            </div>
            <Row gutter={16}>
              <Col xs={24} md={12} lg={12}>
                <div>
                  <p className={cx("author")}>Author: {post.owner.name}</p>
                  <p className={cx("create-at")}>
                    Create at: {convertToVietnamTime(post.createdAt)}
                  </p>
                </div>
              </Col>
              <Col xs={24} md={12} lg={12}>
                <Flex
                  wrap="wrap"
                  gap="small"
                  className="site-button-ghost-wrapper"
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
            <div className={cx("screen-detail")}>
              <Link to={`/blog-detail/${post._id}`}>
                <Button size="large" type="primary">
                  Detail
                </Button>
              </Link>
            </div>
            <Collapse ghost>
              <Panel
                style={{ padding: 0, marginTop: 12 }}
                header={
                  <span className={cx("reply")}>
                    {post.comments.length} Reply
                  </span>
                }
                key="1"
                showArrow={false}
              >
                <CommentList comments={post.comments}/>
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
