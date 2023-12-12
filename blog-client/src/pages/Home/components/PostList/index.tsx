import { Row } from "antd";
import postData from "../../../../data/posts.json";
import { Post } from "@/components/Post";

export default function PostList(): React.ReactElement {
  return (
    <Row className="">
      {postData?.map((post) => (
        <Post {...post} />
      ))}
    </Row>
  );
}
