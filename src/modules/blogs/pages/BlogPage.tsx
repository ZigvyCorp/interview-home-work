import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared";

import { blogAction, selectBlog } from "@/modules/blogs";

const BlogPage = () => {
  const dispatch = useAppDispatch();
  const { rehydrated } = useAppSelector((state: any) => state._persist);
  const { posts } = useAppSelector(selectBlog);

  useEffect(() => {
    if (rehydrated && posts.length === 0) {
      dispatch(blogAction.getPosts());
    }
  }, [rehydrated]);

  console.log(posts);

  return <div>BlogPage</div>;
};

export default BlogPage;
