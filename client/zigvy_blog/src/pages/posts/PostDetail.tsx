import { useParams } from "react-router-dom";
import usePostDetail from "./hooks/usePostDetail";
import MainLayout from "../../layouts/MainLayout";
import PostHeader from "./components/PostHeader";
import PostContent from "./components/PostContent";
import PostDetailComment from "./components/PostDetailComment";

export default function PostDetail() {
  const { id } = useParams();
  const postDetail = usePostDetail(id);
  return (
    <MainLayout>
      {postDetail ? (
        <div className="border my-2 rounded p-3">
          <PostHeader
            title={postDetail.post.title}
            user={postDetail.post.user}
            _id={postDetail.post._id}
          />
          <PostContent body={postDetail.post.body} />
          <PostDetailComment commentData={postDetail.comment} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </MainLayout>
  );
}
