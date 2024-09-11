import { useEffect, useRef } from "react";
import { debounce } from "lodash";

import { useInfiniteQuery } from "@tanstack/react-query";

import { TAGS } from "@/constants/tags.constant";
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

  const { data, error, status, fetchNextPage, refetch, isSuccess } =
    useInfiniteQuery({
      queryKey: [TAGS.POSTS, searchTerm],

      queryFn: ({ pageParam = 1 }) =>
        getBlogs({ pageParam, search: searchTerm }),
      initialPageParam: 1,
      initialData: queryData,
      getNextPageParam: (lastPage) => lastPage?.nextPage,
    });

  const debouncedRefetch = useRef(
    debounce(refetch, 500, {
      leading: true,
      trailing: true,
    })
  ).current;
  console.log("-----");
  console.log(data);
  const handleChangeSearch = (value: string) => {
    handleChangeSearchTerm(value);
    debouncedRefetch();
  };

  useEffect(() => {
    if (data && isSuccess) {
      const dataPages = data.pages;
      setQueryData({
        pages: dataPages,
        pageParams: data.pageParams as number[],
      });
      // const fetchedBlogs = data.pages.flatMap((page) => page?.data);
      // console.log(fetchedBlogs);
      // setQueryData({pages:data.pages })
      // setQueryData({pages:data.pages})
      // setQueryData({pageParams:data.pageParams,currentPage:data.pages})
    }
  }, [data, isSuccess, setQueryData]);

  return {
    refetch,
    data,
    error,
    status,
    fetchNextPage,
    handleChangeSearch,
  };
}

export default useBlogs;
