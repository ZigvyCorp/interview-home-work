import { useEffect } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { TAGS } from "@/constants/tags.constant";
import useDebounce from "@/hooks/use-debounce";
import { getBlogs } from "@/services/blogs.service";
import {
  useGetQueryData,
  useGetSearchTerms,
  useSetQueryData,
  useSetSearchTerms,
} from "@/store";

function useBlogs() {
  const searchTerm = useGetSearchTerms();

  const handleChangeSearchTerm = useSetSearchTerms();

  const queryData = useGetQueryData();
  const setQueryData = useSetQueryData();

  const debouncedSearchTerm = useDebounce(searchTerm);

  const { data, error, status, fetchNextPage, refetch, isSuccess, isPending } =
    useInfiniteQuery({
      queryKey: [TAGS.BLOGS, debouncedSearchTerm],

      queryFn: ({ pageParam = 1 }) =>
        getBlogs({ pageParam, search: searchTerm }),
      initialPageParam: 1,
      initialData: queryData,
      getNextPageParam: (lastPage) => lastPage?.nextPage,
    });

  const handleChangeSearch = (value: string) => {
    handleChangeSearchTerm(value);
  };

  useEffect(() => {
    if (data && isSuccess) {
      const dataPages = data.pages;
      setQueryData({
        pages: dataPages,
        pageParams: data.pageParams as number[],
      });
    }
  }, [data, isSuccess, setQueryData]);

  return {
    refetch,
    data,
    isPending,
    error,
    status,
    fetchNextPage,
    searchTerm,
    handleChangeSearch,
  };
}

export default useBlogs;
