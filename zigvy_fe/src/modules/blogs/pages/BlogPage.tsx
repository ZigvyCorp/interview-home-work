import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared";

import { LoadPage } from "@/components/loading";
import { BlogList } from "@/modules/blogs";

import { blogAction, selectBlog } from "@/modules/blogs";

const BlogPage = () => {
  const dispatch = useAppDispatch();
  const { rehydrated } = useAppSelector((state: any) => state._persist);
  const { posts, loading } = useAppSelector(selectBlog);

  useEffect(() => {
    if (rehydrated && posts.length === 0) {
      dispatch(blogAction.getPosts());
    }
  }, [rehydrated]);

  if (loading) {
    return <LoadPage />;
  }

  return <BlogList blogs={posts} />;
};

export default BlogPage;
