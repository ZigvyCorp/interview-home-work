import { CommentDto } from "@/api/models/comment-dto.ts";

export const Comments = ({ comments }: { comments: CommentDto[] }) => {
  return <div className={"flex flex-col gap-4 cursor-default"}>
    {comments.map(comment => (<Comment comment={comment} key={comment.id} />))}
  </div>;
};
export const Comment = ({ comment }: { comment: CommentDto }) => {
  return <div>
    <p>
      <b>{comment.owner.username}</b> {new Date(comment.createdAt as string).toLocaleDateString()}
    </p>
    <p>
      {comment.content}
    </p>
  </div>;
};
