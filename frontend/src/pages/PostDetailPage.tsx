import { useParams } from "react-router-dom";
import HeaderSection from "../components/header";
import PostDetail from "../components/content/postDetailPage";

type PostParams = {
  postId: string; // Định nghĩa kiểu của tham số động postId là string
};
const PostDetailPage = () => {

  return (
    <>
      <HeaderSection />
      <PostDetail />
    </>
  );
};
export default PostDetailPage;
