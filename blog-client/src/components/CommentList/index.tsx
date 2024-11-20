import { Collapse, CollapseProps } from "antd";
import { useState } from "react";
import Comment from "./Comment";

export default function CommentList({ commentList }: any): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "2 replies",
      children: <Comment />,
      showArrow: false,
    },
  ];

  return (
    <Collapse
      defaultActiveKey={["1"]}
      ghost
      onChange={handleToggle}
      items={items}
    />
  );
}
