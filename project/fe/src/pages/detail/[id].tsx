import Blogs from "../../components/blog/Blog";
import { useParams, useRoute } from "wouter";
import { useEffect, useState } from "react";
import { IBlog } from "../../utils/type.ts";
import { getApi } from "../../utils/fetch.ts";
import { apiRoutes } from "../../utils/apiRoutes.ts";
import dayjs from "dayjs";

const BlogDetail = () => {
  // const params = useParams();
  const [match, params] = useRoute("/detail/:id");
  const [blog, setBlog] = useState<IBlog>();
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const getBlogById = async () => {
      if (match||params!==null) {
        console.log(params)
        return await getApi(apiRoutes.blog + `/${params.id}`).then((res) =>
          setBlog(res.blog),
        );
      }
    };

    getBlogById();
  }, [params.id]);
  return (
    <>
      {blog && (
        <Blogs
          title={blog.title}
          content={blog.content}
          createdAt={dayjs(blog.createdAt).format("LL")}
        />
      )}
    </>
  );
};

export default BlogDetail;
