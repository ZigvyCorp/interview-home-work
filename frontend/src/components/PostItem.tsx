import React, { useMemo, useCallback, useState } from "react";
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
  console.log("🚀 ~ file: PostItem.tsx:135 ~ post:", post);

  const [limit] = useState(5);
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comment.comments);

  const { data: commentsState, loading } = comments[post.id] || {
    data: PaginationResponseDefault,
    loading: false,
  };
  console.log("🚀 ~ file: PostItem.tsx:43 ~ loading:", loading);

  const commentsList = commentsState || PaginationResponseDefault;

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = async () => {
    const count = get(post, "comments", 0) as number;
    if (count > 0 && isCollapsed) {
      // Check is get first cmt
      if (commentsList.meta?.currentPage <= 0) {
        dispatch(fetchCommentAsync({ limit, page, postId: post.id }));
      }
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
              const color = generateRandomColor();
              return (
                <Tag key={t} color={color}>
                  {t}
                </Tag>
              );
            })}
          </Space>
        </Flex>
      </Flex>
    ),
    [generateRandomColor]
  );

  const renderContent = (content: string) => (
    <Flex>
      <Paragraph ellipsis={{ rows: 3, expandable: true }}>{content}</Paragraph>
    </Flex>
  );

  const handleCommentLoadMore = async () => {
    if (loading) return;

    if (page >= commentsList.meta.totalPages) {
      return;
    }
    dispatch(fetchCommentAsync({ limit, page: page + 1, postId: post.id }));
    setPage((pre) => pre + 1);
  };

  const renderComments = (count: number) => (
    <Flex vertical>
      <Button type="link" onClick={toggleCollapse}>
        <CommentOutlined /> {count} relies
      </Button>
      <Collapse ghost activeKey={isCollapsed ? [] : ["1"]}>
        <Panel header="" key="1" showArrow={false}>
          <div
            id="scrollableDiv"
            style={{
              height: 400,
              overflow: "auto",
            }}
          >
            <InfiniteScroll
              dataLength={commentsList.items.length}
              next={handleCommentLoadMore}
              hasMore={commentsList.items.length < commentsList.meta.totalItems}
              loader={
                <Skeleton avatar paragraph={{ rows: 1 }} active={loading} />
              }
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
          </div>
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
