/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IPost, IUser } from "src/constant/resource.constant";
import { getPost } from "src/services/posts.service";
import { getUser } from "src/services/users.service";
import {
  postErrorSelector,
  postLoadingSelector,
  postsSelector,
} from "src/store/modules/posts/posts.selector";
import {
  userErrorSelector,
  userLoadingSelector,
  usersSelector,
} from "src/store/modules/users/users.selector";

const usePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const isPostsLoading = useSelector(postLoadingSelector);

  // const userError=useSelector()
  const isUsersLoading = useSelector(userLoadingSelector);
  const isLoading = isPostsLoading || isUsersLoading;
  const postError = useSelector(postErrorSelector);
  const userError = useSelector(userErrorSelector);
  const posts = useSelector(postsSelector);
  const users = useSelector(usersSelector);
  const existingPost = posts.find((post) => post.id === +id!);

  const usedPost = posts.length > 1 ? existingPost : post;
  const existingUser = users.find((user) => user.id === usedPost?.userId);
  const usedUser = users.length > 1 ? existingUser : user;

  const combinedPost = {
    ...usedPost,
    author: { ...usedUser },
  };

  useEffect(() => {
    async function getPostData() {
      const data = await getPost(id!);
      setPost(data);
    }
    if (!post || !posts.length) {
      getPostData();
    }
  }, [post, id, posts.length]);
  useEffect(() => {
    async function getUserData() {
      const data = await getUser(+id!);
      setUser(data);
    }
    if (!users || !users.length) {
      getUserData();
    }
  }, [users, id, users.length]);
  return { combinedPost, isLoading, postError, userError };
};
export default usePost;
