import { Row, Space } from "antd";

import Tag from "./Tag";

const ListTags = () => {
  return (
    <Row>
      <Space size={[6, 6]} wrap>
        {["magenta", "red"].map((color: any) => (
          <Tag color={color} key={color} />
        ))}
      </Space>
    </Row>
  );
};

export default ListTags;
