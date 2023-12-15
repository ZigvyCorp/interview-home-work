import { Input, Space } from "antd";

export default function Search() {
  return (
    <Space>
      <Input.Search
        size="large"
        placeholder="Search"
        style={{ display: "flex" }}
      />
    </Space>
  );
}
