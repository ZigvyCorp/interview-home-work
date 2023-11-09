import React, { useCallback, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IComment, IPost, PaginationResponseDefault } from "../types";
import {
  Button,
  Card,
  Flex,
  Space,
  Tag,
  Typography,
  Collapse,
  List,
  Skeleton,
  Divider,
} from "antd";
import { CommentOutlined } from "@ant-design/icons";
import moment from "moment";
import { get } from "lodash";

import { generateRandomColor } from "../utils";

import { CommentItem } from "../components/CommentItem";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCommentAsync } from "../redux/saga/postSaga";

const { Paragraph } = Typography;
const { Panel } = Collapse;
interface IPostItemProps {
  post: IPost;
  extra?: React.ReactNode;
}
const PostItem: React.FC<IPostItemProps> = (props) => {
  const { post, extra } = props;
  const [limit] = useState(5);
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comment.comments);

  const { data: commentsState, loading } = comments[post.id] || {
    data: PaginationResponseDefault,
    loading: false,
  };

  const commentsList = commentsState || PaginationResponseDefault;

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = async () => {
    if ((get(post, "comments", 0) as number) > 0 && isCollapsed) {
      dispatch(fetchCommentAsync({ limit, page, postId: post.id }));
    }
    setIsCollapsed(!isCollapsed);
  };

  const renderHeader = useCallback(
    (
      author: string = "Unknown",
      createdAt?: string,
      tags: string[] = ["apple", "pear", "banana"]
    ) => (
      <Flex justify="space-between">
        <Flex vertical flex={1}>
          <div>Author: {author}</div>
          <div>Created: {moment(createdAt).fromNow()}</div>
        </Flex>
        <Flex flex={1} justify="end">
          <Space size={[0, "small"]} wrap>
            {tags.map((t) => {
              return (
                <Tag key={t} color={generateRandomColor()}>
                  {t}
                </Tag>
              );
            })}
          </Space>
        </Flex>
      </Flex>
    ),
    [post]
  );

  const renderContent = (content: string) => (
    <Flex>
      <Paragraph ellipsis={{ rows: 3, expandable: true }}>{content}</Paragraph>
    </Flex>
  );

  const handleCommentLoadMore = () => {
    if(loading) return;

    if(page >= commentsList.meta.totalItems) {
      return;
    }
    // dispatch(fetchCommentAsync({ limit, page: page + 1, postId: post.id }));
  };

  const renderComments = (count: number) => (
    <Flex vertical>
      <Button type="link" onClick={toggleCollapse}>
        <CommentOutlined /> {count} relies
      </Button>
      <Collapse ghost activeKey={isCollapsed ? [] : ["1"]}>
        <Panel header="" key="1" showArrow={false}>
          <InfiniteScroll
            dataLength={commentsList.items.length}
            next={handleCommentLoadMore}
            hasMore={commentsList.items.length < commentsList.meta.totalItems}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List<IComment>
              itemLayout="horizontal"
              // loadMore={handleCommentLoadMore}
              dataSource={commentsList.items}
              renderItem={(item, index) => (
                <CommentItem comment={item} index={index} />
              )}
            />
          </InfiniteScroll>
        </Panel>
      </Collapse>
    </Flex>
  );

  return (
    <Card title={post.title} extra={extra} style={{ marginTop: "8px" }}>
      {renderHeader(get(post.owner, "name"), post.createdAt, post.tags)}
      {renderContent(post.content)}
      {renderComments(get(post, "comments", 0) as number)}
    </Card>
  );
};

export { PostItem };
