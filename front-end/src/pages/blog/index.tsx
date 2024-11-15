import { useParams } from "react-router-dom";
import { useGetPostByIdOrSlug } from "@/api/hooks/use-post-query.ts";
import { Layout } from "antd";
import { Comments } from "@/components/comment.tsx";
import PageFooter from "@/components/page-footer.tsx";
import PageHeader from "@/components/page-header.tsx";

const { Content } = Layout;

const BlogPage = () => {
  const { slug } = useParams();
  const post = useGetPostByIdOrSlug(slug || "");
  if (!slug) return <p>Blog not found</p>;
  if (!post.data) return null;
  return (
    <Layout className={"h-screen overflow-hidden"}>
      <PageHeader />
      <Content
        className={"flex-1 flex flex-col overflow-auto px-2 py-4"}>
        <div className={"w-full max-w-screen-lg mx-auto"}>
          <div className={"flex flex-col gap-2"}>
            <h1 className={"font-bold text-center text-3xl"}>
              {post.data.title}
            </h1>
            <p className={"text-base"}>
              <span className={"font-semibold"}>Author:</span>{" "}
              {post.data.owner.username}
            </p>
            <p className={"text-base"}>
              <span className={"font-semibold"}>Created at:</span>{" "}
              {post.data.createdAt &&
                new Date(post.data.createdAt).toLocaleDateString()}
            </p>
            <p className={"text-lg"}>{post.data.content}</p>
            <Comments
              postID={post.data.id}
              open
            />
          </div>
        </div>
      </Content>
      <PageFooter />
    </Layout>
  );
};

export default BlogPage;
