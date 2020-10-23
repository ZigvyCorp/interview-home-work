import { Post } from "@/models/post";
import React, { useEffect, useState } from "react";
import { InfiniteScrollContainer } from "../infinite-scroll";
import { renderPostPreview } from "../post-card";

interface Props {
  posts: Post[];
  loadPosts: (next?: boolean) => void;
  loading?: boolean;
  total?: number;
  onDelete: (index: number) => void;
  onUpdated: (index: number, post: Post) => void;
  onCommentsUpdated: (index: number, post: Post) => void;
}

export const PostsContainer: React.FC<Props> = (props) => {
  const {
    posts,
    loadPosts,
    loading,
    total,
    onDelete,
    onUpdated,
    onCommentsUpdated,
  } = props;
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setHasMore(posts.length < (total || 0));
  }, [posts.length, total]);

  return (
    <InfiniteScrollContainer<Post>
      data={posts}
      itemRenderer={renderPostPreview(onDelete, onUpdated, onCommentsUpdated)}
      loadMore={loadPosts}
      loading={loading}
      hasMore={hasMore}
    />
  );
};
