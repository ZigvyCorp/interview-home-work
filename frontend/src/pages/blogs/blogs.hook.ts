import { TAGS } from "@/constants/tags.constant";
import { getBlogs } from "@/services/blogs.service";
import { useInfiniteQuery } from "@tanstack/react-query";

function useBlogs() {
  const { data, error, status, fetchNextPage } = useInfiniteQuery({
    queryKey: [TAGS.POSTS],
    queryFn: getBlogs,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage?.nextPage,
  });

  return { data, error, status, fetchNextPage };
}

export default useBlogs;
