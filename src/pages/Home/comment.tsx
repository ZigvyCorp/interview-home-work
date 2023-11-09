// CommentSection.tsx
import React from "react";
import { Collapse, Typography } from "antd";

const { Panel } = Collapse;
const { Text } = Typography;

interface CommentSectionProps {
  name: string;
  comment: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ name, comment }) => {
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header={name} key="1">
        <Text>{comment}</Text>
      </Panel>
    </Collapse>
  );
};

export default CommentSection;
