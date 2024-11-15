import { CommentDto } from "@/api/models/comment-dto.ts";
import { Button, Collapse, Input } from "antd";
import {
  useCreateComment,
  useGetComments,
} from "@/api/hooks/use-comment-query.ts";
import { useAuth } from "@/providers/auth-provider.tsx";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";
import { useMemo } from "react";

type CommentInputs = {
  comment: string;
};

export const Comments = ({
  postID,
  open,
}: {
  postID: string;
  open?: boolean;
}) => {
  const comments = useGetComments(postID);
  const auth = useAuth();
  const createComment = useCreateComment();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentInputs>();
  const onSubmit: SubmitHandler<CommentInputs> = async (data) => {
    createComment.mutate(
      {
        postID: postID,
        content: data.comment,
      },
      {
        onSuccess: async () => {
          await comments.refetch();
          reset();
        },
        onError: () => {},
      }
    );
  };
  const loginButton = (
    <div>
      <p className={"font-semibold"}>Login to reply to this post</p>
      <Button
        onClick={auth.openLoginModal}
        type={"primary"}>
        Login
      </Button>
    </div>
  );
  const commentInput = (
    <div className={"flex flex-col gap-2"}>
      <p className={"font-bold"}>Reply to this post</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"flex flex-col gap-2"}>
        <Controller
          name="comment"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <Input.TextArea
              {...field}
              placeholder="Write a comment"
            />
          )}
        />
        {errors.comment && (
          <span className={"text-red-400"}>
            This field is required
          </span>
        )}
        <div>
          <Button
            type={"primary"}
            htmlType={"submit"}>
            Reply
          </Button>
        </div>
      </form>
    </div>
  );
  const totalComment = useMemo(() => {
    if (!comments.data) return 0;
    return comments.data.pages[comments.data.pages.length - 1].total;
  }, [comments.data]);
  return (
    <Collapse
      defaultActiveKey={open ? 0 : undefined}
      items={[
        {
          key: 0,
          label: `${totalComment} replies`,
          children: (
            <div className={"flex flex-col gap-4 cursor-default"}>
              <div>
                {auth.loading
                  ? "Loading..."
                  : auth.isAuth
                  ? commentInput
                  : loginButton}
              </div>
              {comments.data?.pages?.map((group, i) => (
                <Fragment key={i}>
                  {group.comments.map((comment) => (
                    <Comment
                      comment={comment}
                      key={comment.id}
                    />
                  ))}
                </Fragment>
              ))}
              {comments.hasNextPage && (
                <Button
                  type="primary"
                  disabled={comments.isFetchingNextPage}
                  onClick={() => {
                    comments.fetchNextPage();
                  }}>
                  Load more comments
                </Button>
              )}
            </div>
          ),
        },
      ]}
    />
  );
};

export const Comment = ({ comment }: { comment: CommentDto }) => {
  return (
    <div>
      <p>
        <b>{comment.owner.username}</b>{" "}
        {comment.createdAt &&
          new Date(comment.createdAt).toLocaleDateString()}
      </p>
      <p>{comment.content}</p>
    </div>
  );
};
