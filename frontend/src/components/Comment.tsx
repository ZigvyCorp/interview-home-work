import { Card, Col, Space, Typography } from "antd";

import { commonAvatar, unknownAvatar, zigvyAvatar } from "../constants";
import { Comment as CommentType } from "../types";
import customRelativeTime from "../utils/formatRelativeTime";

const { Text, Paragraph } = Typography;

type Props = {
  comment: CommentType;
};

const Comment = (props: Props) => {
  const { comment } = props;
  return (
    <Card className="mb-5">
      <Space size={[16, 0]} direction="horizontal" className="align-start">
        <img
          width={35}
          height={35}
          className="rounded-full"
          alt="test"
          src={comment.user?.id === 11 ? zigvyAvatar : commonAvatar}
        />
        <Col>
          <Space size={[10, 0]} direction="horizontal">
            <Text className="text-pre-medium opacity-lg">
              {comment.user?.name}
            </Text>
            <Text className="text-gray-200 text-sm">
              {customRelativeTime(`${comment.createdAt}`) ?? "a day ago"}
            </Text>
          </Space>
          <Paragraph className="text-pre-medium text-length-2 my-1">
            {comment.body}
          </Paragraph>
          <Text className="text-pre-medium opacity-lg cursor-pointer">
            Reply to
          </Text>
        </Col>
      </Space>
    </Card>
  );
};

export default Comment;
