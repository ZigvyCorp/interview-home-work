import { getValidArray } from "src/utils/common";
import { IPostWithRelations } from "src/interfaces/post";
import { IPostItemProps } from "src/components/PostItem";

export function getPostProps(
  post: IPostWithRelations,
  isViewDetail: boolean
): IPostItemProps {
  return {
    id: post?.id?.toString(),
    author: post?.user?.name ?? "",
    createdAt: new Date().toISOString(),
    title: post?.title,
    content: post?.body,
    comments: post?.comments ?? [],
    isViewDetail,
  };
}

export function getPostsProps(
  posts: IPostWithRelations[],
  isViewDetail: boolean
): IPostItemProps[] {
  return getValidArray(posts).map((post: IPostWithRelations) => {
    return getPostProps(post, isViewDetail);
  });
}
