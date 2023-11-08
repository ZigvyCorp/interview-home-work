import { Avatar, Flex, Typography } from "antd";
import { IComment } from "../types";
import moment from "moment";

const { Paragraph, Text } = Typography;

interface ICommentProps {
  comment: IComment;
  index: number;
}

export const CommentItem: React.FC<ICommentProps> = ({ comment, index }) => {
  return (
    <Flex align="start" style={{ padding: "8px" }}>
      <Flex>
        <Avatar
          src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
        />
      </Flex>
      <Flex vertical style={{ marginLeft: "8px" }}>
        <Flex>
          <Text strong style={{ marginRight: "8px" }}>
            {comment.owner}
          </Text>
          <span style={{ opacity: 0.5 }}>
            {moment(comment.created_at).fromNow()}
          </span>
        </Flex>
        <Paragraph ellipsis={{ rows: 3, expandable: true }}>
          {comment.content}
        </Paragraph>
      </Flex>
    </Flex>
  );
};
