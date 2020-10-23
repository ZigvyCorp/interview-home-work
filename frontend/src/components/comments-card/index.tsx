import { Comment } from "@/models/comment";
import { Post } from "@/models/post";
import { FilterRequest } from "@/models/requests/filter-request";
import { useServices } from "@/services";
import { Button, Card, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { from, Subscription } from "rxjs";
import { CommentComponent } from "./Comment";
import { CommentInput } from "./CommentInput";

export const CommentsCard: React.FC<{
  post: Post;
  onCommentsUpdated: (updatedPost: Post) => void;
}> = (props) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const { commentService } = useServices();
  const subscriptions: Subscription[] = [];

  useEffect(() => {
    getComments();
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [props.post._id, page]);

  useEffect(() => {
    setHasMore(comments.length < (props.post.comments as any[])?.length);
  }, [comments.length, props.post.comments]);

  const getComments = () => {
    if (loading) return;
    const filter = new FilterRequest();
    filter.page = page;
    filter.pageSize = 5;
    setLoading(true);
    subscriptions.push(
      from(commentService().getComments(props.post._id, filter)).subscribe(
        (res: any) => {
          setComments([...((res.data as any[]) || []).reverse(), ...comments]);
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      )
    );
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const pushComment = (comment: Comment, post: Post) => {
    props.onCommentsUpdated?.call(undefined, post);
    const newComments = [...comments];
    newComments.push(comment);
    setComments(newComments);
  };

  const onCommentDeleted = (id: string) => {
    return (updatedPost: Post) => {
      const newComments = [...comments.filter((comment) => comment._id !== id)];
      setComments(newComments);
      props.onCommentsUpdated(updatedPost);
    };
  };

  return (
    <Card
      style={{
        maxHeight: 600,
        overflowY: "auto",
      }}
    >
      {hasMore && !loading && (
        <Button
          type="link"
          onClick={loadMore}
          style={{ padding: "0 0 20px 0" }}
        >
          Load more...
        </Button>
      )}
      {comments.map((comment) => (
        <CommentComponent
          comment={comment}
          key={comment._id}
          onDeleted={onCommentDeleted(comment._id)}
        />
      ))}
      {loading &&
        (props.post.comments as string[])?.map((comment: any, index) => {
          return <Skeleton avatar paragraph active key={index} />;
        })}
      <CommentInput post={props.post} onCommented={pushComment} />
    </Card>
  );
};
