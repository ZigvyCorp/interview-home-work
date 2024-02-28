import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Posts from "./posts";

function PostDetail() {
  const { id } = useParams();

  return (
    <>
      <Posts postsId={id} />
    </>
  );
}

export default PostDetail;
