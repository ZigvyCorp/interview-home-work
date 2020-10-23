import { useAuth } from "@/HOCs/auth-provider";
import { Post } from "@/models/post";
import { useServices } from "@/services";
import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { from, Subscription } from "rxjs";

export const LikeAction: React.FC<{
  post: Post;
  onUpdate: (post: Post) => void;
}> = (props) => {
  const { post, onUpdate } = props;
  const { user } = useAuth();
  const { postService } = useServices();
  const subscriptions: Subscription[] = [];

  useEffect(() => {
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, []);

  const unlike = () => {
    if (!(post.likes as string[])?.includes(user?._id || "")) return;
    subscriptions.push(
      from(postService().unlikePost(post._id)).subscribe((post: any) => {
        onUpdate(post);
      })
    );
  };

  const liked = () => {
    return (post.likes as string[])?.includes(user?._id || "");
  };

  const like = () => {
    if ((post.likes as string[])?.includes(user?._id || "")) return;
    subscriptions.push(
      from(postService().likePost(post._id)).subscribe((post: any) => {
        onUpdate(post);
      })
    );
  };

  return liked() ? (
    <span onClick={unlike}>
      <LikeFilled key="liked" /> {post.likes?.length}
    </span>
  ) : (
    <span onClick={like}>
      <LikeOutlined key="like" /> {post.likes?.length}
    </span>
  );
};
