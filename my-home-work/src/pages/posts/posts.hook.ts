import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import axios, { AxiosError, Canceler } from "axios";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  postsSelector,
  postLoadingSelector,
  postErrorSelector,
  postParamsSelector,
} from "src/store/modules/posts/posts.selector";
import {
  usersSelector,
  userLoadingSelector,
  userErrorSelector,
} from "src/store/modules/users/users.selector";
import {
  loadPosts,
  setError,
  setPosts,
  setPostsParams,
} from "src/store/modules/posts/posts.action";
import { loadUsers } from "src/store/modules/users/users.action";
import { IPost, IUser, RESOURCES } from "src/constant/resource.constant";
import { URL } from "src/constant/url.constant";
import getRandomDate from "src/util/random-date.util";
import { getPosts } from "src/services/posts.service";

const usePostsHook = () => {
  //  fix small delay on the input field
  const [isPending, startTransition] = useTransition();
  const dispatch = useDispatch();
  const postParams = useSelector(postParamsSelector);
  const [filteredPosts, setFilteredPosts] = useState<IPost[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const posts = useSelector(postsSelector);

  const users = useSelector(usersSelector);
  const isPostsLoading = useSelector(postLoadingSelector);

  // const userError=useSelector()
  const isUsersLoading = useSelector(userLoadingSelector);
  const isLoading = isPostsLoading || isUsersLoading;
  const postError = useSelector(postErrorSelector);
  const userError = useSelector(userErrorSelector);

  //   I use lookup object-based approach to avoid ON2 time complexity

  const lookupUser = useMemo(
    () =>
      users.reduce((acc: { [key: number]: IUser }, user) => {
        acc[user.id] = user;
        return acc;
      }, {}),
    [users]
  );

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostElementRef = useCallback(
    (node: HTMLAnchorElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          const searchValue = postParams?.search || "";
          const page = (postParams?.page || 1) + 1;
          dispatch(setPostsParams(page, searchValue));
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, dispatch, postParams?.page, postParams?.search]
  );

  // fetch when app starts
  useEffect(() => {
    if (!posts || !posts.length) {
      dispatch(loadPosts());
    }
    if (!users || !users.length) {
      dispatch(loadUsers());
    }
    // reset search when app starts
    dispatch(setPostsParams(1, ""));
  }, [dispatch, posts, users, postParams?.page]);

  // query
  useEffect(() => {
    let cancel: Canceler;
    async function searchPosts() {
      setIsSearching(true);
      dispatch(setError(""));
      try {
        // need to fetch all the posts because this api doesn't support advanced filtering features.
        const response = await axios({
          method: "GET",
          url: `${URL}/${RESOURCES.posts}`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        const posts = response.data;

        const filteredPosts = (posts as IPost[])
          .filter((post) => {
            return post.title
              .toLowerCase()
              .includes(postParams?.search.toLowerCase() || "");
          })
          .map((post) => {
            const startDate = new Date("2020-01-01");
            const endDate = new Date("2023-12-31");

            const randomDate = getRandomDate(startDate, endDate);
            return { ...post, createdAt: randomDate };
          });
        startTransition(() => {
          setFilteredPosts(filteredPosts);
        });
      } catch (error) {
        if (axios.isCancel(error)) return;
        const err = error as AxiosError;
        if (err.response) {
          // Handle HTTP response errors

          dispatch(
            setError(`Request failed with status code: ${err.response.status}`)
          );
        } else if (err.message) {
          // Handle network errors or other exceptions
          dispatch(setError(err.message));
        } else {
          // Handle other error cases
          dispatch(setError("An unknown error occurred"));
        }
      } finally {
        setIsSearching(false);
      }
    }
    if (postParams?.search) {
      searchPosts();
    }
    if (postParams?.search) {
      setFilteredPosts(null);
    }
    return () => {
      if (typeof cancel === "function") cancel();
    };
  }, [postParams?.page, postParams?.search, dispatch]);

  // scrolling
  useEffect(() => {
    async function getPostsData(page: number) {
      try {
        const data = await getPosts(page);
        dispatch(setPosts([...posts, ...data]));
      } catch (error) {
        const err = error as AxiosError;
        if (err.response) {
          // Handle HTTP response errors

          dispatch(
            setError(`Request failed with status code: ${err.response.status}`)
          );
        } else if (err.message) {
          // Handle network errors or other exceptions
          dispatch(setError(err.message));
        } else {
          // Handle other error cases
          dispatch(setError("An unknown error occurred"));
        }
      }
    }
    if (postParams && postParams?.page > 1) {
      getPostsData(postParams?.page);
    }
  }, [postParams?.page, postParams, dispatch, posts]);
  const combinedPosts = (filteredPosts || posts).map((post) => {
    return {
      ...post,
      author: lookupUser[post.userId],
    };
  });

  return {
    combinedPosts,
    isLoading,
    postError,
    userError,
    isPending,
    isSearching,
    lastPostElementRef,
  };
};

export default usePostsHook;
