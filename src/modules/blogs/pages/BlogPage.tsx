import { useEffect } from "react";
import { useAppDispatch } from "@/shared";

import { blogAction } from "@/modules/blogs";

const BlogPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(blogAction.getPosts());
  }, []);

  return <div>BlogPage</div>;
};

export default BlogPage;
