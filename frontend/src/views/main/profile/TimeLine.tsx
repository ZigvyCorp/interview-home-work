import { PostsContainer } from "@/components/posts-container";
import { Post } from "@/models/post";
import { FilterRequest } from "@/models/requests/filter-request";
import { useServices } from "@/services";
import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { from, Subscription } from "rxjs";

const { Content } = Layout;

export const UserTimeline: React.FC = () => {
  const match = useRouteMatch<{ id: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const { profileService } = useServices();
  const subscriptions: Subscription[] = [];

  useEffect(() => {
    getUserPosts(match.params.id)();
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [match.params.id]);

  const getUserPosts = (userId: string) => {
    return (next?: boolean) => {
      if (!next) setPosts([]);
      const filter = new FilterRequest();
      filter.page = next ? page + 1 : 0;
      filter.pageSize = 10;
      setLoading(true);
      subscriptions.push(
        from(profileService().getUserPosts(userId, filter)).subscribe(
          (posts: any) => {
            setPosts((prevPosts) => [...prevPosts, ...posts.data]);
            setTotal(posts.metadata?.total || 0);
            setLoading(false);
          },
          () => {
            setLoading(false);
          }
        )
      );
    };
  };

  const onDelete = (index: number) => {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  const onUpdated = (index: number, post: Post) => {
    const newPosts = [...posts];
    newPosts[index] = post;
    setPosts(newPosts);
  };

  const onCommentsUpdated = (index: number, post: Post) => {
    const newPosts = [...posts];
    const updatingPost = newPosts[index];
    newPosts[index] = {
      ...updatingPost,
      comments: post.comments || [],
    };
    setPosts(newPosts);
  };

  return (
    <Content style={{ padding: "0 24px 0 344px", minHeight: 280 }}>
      <PostsContainer
        posts={posts}
        loadPosts={(next) => getUserPosts(match.params.id)(next)}
        onDelete={onDelete}
        onUpdated={onUpdated}
        onCommentsUpdated={onCommentsUpdated}
        loading={loading}
        total={total}
      />
    </Content>
  );
};
