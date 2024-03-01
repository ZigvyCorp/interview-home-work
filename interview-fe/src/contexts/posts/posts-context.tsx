import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useContext,
} from "react";

import { Post, PostDetail, TypePost } from "@/types/post";
import { useAuth } from "@/hooks/use-auth";
import { getFormData } from "@/utils/api-request";
import useFunction, {
  DEFAULT_FUNCTION_RETURN,
  UseFunctionReturnType,
} from "@/hooks/use-function";
import { PostsApi } from "@/api/posts";

interface ContextValue {
  getPostsApi: UseFunctionReturnType<FormData, Post[]>;
}

export const PostsContext = createContext<ContextValue>({
  getPostsApi: DEFAULT_FUNCTION_RETURN,
});

const PostsProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();

  const getPostsApi = useFunction(PostsApi.getPosts);

  useEffect(() => {
    if (isAuthenticated) {
      getPostsApi.call(new FormData());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PostsContext.Provider
      value={{
        getPostsApi,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => useContext(PostsContext);

export default PostsProvider;
