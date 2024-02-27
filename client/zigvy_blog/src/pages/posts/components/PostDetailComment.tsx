import { useLocation } from "react-router-dom";
import { CommentDataType } from "../model";

type PostDetailCommentType = {
  commentData: CommentDataType[];
};

export default function PostDetailComment({
  commentData,
}: PostDetailCommentType) {
  const location = useLocation()
  const maxHeight = location.pathname === "/" ? "90px" : "300px";
  return (
    <div className="border-top">
      <p className="text-decoration-underline">Comments: </p>
      <div className="overflow-auto" style={{maxHeight}}>
        {commentData.map((comment: CommentDataType, index: number) => {
          return (
            <div key={index}>
              <p className="fw-bold m-0">@{comment.name}</p>
              <p className="m-0 p-3 bg-secondary-subtle rounded">{comment.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
