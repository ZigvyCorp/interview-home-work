/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Error, Loading, NotFound } from "src/components";
import usePost from "./post.hook";
import PostComponent from "src/components/post/post.component";
const Post = () => {
  const { combinedPost: post, isLoading, postError, userError } = usePost();
  if (postError) {
    return <Error msg={postError} />;
  }
  if (userError) {
    return <Error msg={userError} />;
  }
  if (isLoading) return <Loading />;
  post;
  if (!post || !Object.keys(post).length) return <NotFound />;
  return (
    <PostComponent
      title={post.title!}
      author={post.author.name!}
      content={post.body!}
      createdAt={post.createdAt!}
      postId={post.id!}
    />
  );
};
export default Post;
