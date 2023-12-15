import DefaultLayout from "@/layouts";
import { Space } from "antd";
import PostList from "./components/PostList";

export default function Home() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <DefaultLayout>
        <PostList/>
      </DefaultLayout>
    </Space>
  );
}
