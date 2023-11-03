import { useEffect, useState } from "react";
import { Avatar, Flex, List, Typography } from "antd";
import { IComment } from "src/constant/resource.constant";
import { getPostComments } from "src/services/comments.service";
import styles from "./comments.module.css";
const { Text, Paragraph } = Typography;
const Comments = ({ postId }: { postId: number }) => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    async function getCommentsData() {
      const data = await getPostComments(postId);
      setComments(data as IComment[]);
    }
    getCommentsData();
  }, [postId]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCollapsed((prev) => !prev);
  };
  return (
    <div className={styles.comments}>
      <div className={styles.commentCount}>
        <button onClick={handleToggle} className={styles.commentCountBtn}>
          {comments.length === 1 && `${comments.length} reply`}
          {comments.length > 1 && `${comments.length} replies`}
          {comments.length === 0 && `No replies`}
        </button>
      </div>
      {!isCollapsed && (
        <List
          loading={false}
          className={styles.list}
          itemLayout="horizontal"
          // loadMore={loadMore}
          dataSource={comments}
          renderItem={(comment) => (
            <li className={styles.comment}>
              <Avatar
                src={
                  "https://www.shutterstock.com/image-photo/cap-dantibes-france-may-25-260nw-670930117.jpg"
                }
                size={"large"}
              />
              <Flex vertical gap="small">
                <Flex gap="small">
                  <Text type="secondary">{comment.name}</Text>
                  <Text disabled>2 days ago</Text>
                </Flex>
                <Flex vertical gap="middle">
                  <Paragraph>{comment.body}</Paragraph>
                  <button className={styles.commentBtn}>Reply to</button>
                </Flex>
              </Flex>
            </li>
          )}
        />
      )}
    </div>
  );
};
export default Comments;
