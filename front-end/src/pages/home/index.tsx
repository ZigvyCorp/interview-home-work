import { Button, Card } from "antd";
import { useGetPosts } from "@/api/hooks/use-post-query.ts";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { Comments } from "@/components/comment.tsx";
import PageHeader from "@/components/page-header.tsx";
import PageFooter from "@/components/page-footer.tsx";
import { Fragment } from "react/jsx-runtime";

const { Content } = Layout;
const HomePage = () => {
  const navigate = useNavigate();
  const posts = useGetPosts();
  return (
    <Layout className={"h-screen overflow-hidden "}>
      <PageHeader />
      <Content
        className={"flex-1 flex flex-col overflow-auto px-2 py-4"}>
        <div className={"w-full max-w-screen-md mx-auto"}>
          <div className={"flex flex-col gap-4"}>
            <h1 className={"font-bold text-center text-3xl"}>Blog</h1>
            {posts.data?.pages.map((group, i) => {
              return (
                <Fragment key={i}>
                  {group.posts?.map((post) => {
                    return (
                      <Card
                        key={post.id}
                        hoverable
                        styles={{
                          body: { padding: 4, overflow: "hidden" },
                        }}>
                        <div
                          className={"flex justify-between"}
                          onClick={() => {
                            navigate(`/blog/${post.slug}`);
                          }}>
                          <div
                            className={
                              "flex items-start justify-between flex-col p-8"
                            }>
                            <p className={"font-bold text-xl"}>
                              {post.title}
                            </p>
                            <p>
                              <b>Author:</b> {post.owner.username}
                            </p>
                            <p>
                              <b>Created at:</b>{" "}
                              {new Date(
                                post.createdAt as string
                              ).toLocaleDateString()}
                            </p>
                            <p>
                              {post.content.substring(0, 100) + "..."}
                            </p>
                          </div>
                        </div>
                        <Comments postID={post.id} />
                      </Card>
                    );
                  })}
                </Fragment>
              );
            })}
            {posts.hasNextPage && (
              <Button
                type="primary"
                disabled={posts.isFetchingNextPage}
                onClick={() => {
                  posts.fetchNextPage();
                }}>
                Load more posts
              </Button>
            )}
          </div>
        </div>
      </Content>
      <PageFooter />
    </Layout>
  );
};

export default HomePage;
