import { List } from "antd";
import Post from "src/components/post/post.component";
import usePostsHook from "./posts.hook";
import { Loading } from "src/components/loading";
import { Error } from "src/components/error";
const Posts = () => {
  const {
    combinedPosts: posts,
    isLoading,
    isPending,
    postError,
    userError,
    isSearching,
    lastPostElementRef,
  } = usePostsHook();
  if (postError) {
    return <Error msg={postError} />;
  }
  if (userError) {
    return <Error msg={userError} />;
  }
  if (!posts.length && !isLoading) {
    return <Error msg={"No Posts found!"} />;
  }
  if (isSearching || isPending) {
    return (
      <p style={{ fontSize: "var(--large-font-size)", textAlign: "center" }}>
        Searching...
      </p>
    );
  }
  if (isLoading) return <Loading />;
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={posts}
        renderItem={(post, index) => {
          posts.length;
          if (posts.length === index + 1)
            return (
              <List.Item>
                <Post
                  ref={lastPostElementRef}
                  title={post.title}
                  author={post.author.name}
                  content={post.body}
                  createdAt={post.createdAt}
                  postId={post.id}
                />
              </List.Item>
            );
          return (
            <List.Item>
              <Post
                title={post.title}
                author={post.author.name}
                content={post.body}
                createdAt={post.createdAt}
                postId={post.id}
              />
            </List.Item>
          );
        }}
      />
      <Loading />
    </>
  );
};
export default Posts;
