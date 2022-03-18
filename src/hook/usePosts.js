import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { catchAsyn } from "@/utils/catchAsyn";

const getPosts = catchAsyn(async ({ pageParam = 1 }) => {
   const { data } = await axios.get("/api/posts?cursor=" + pageParam);
   return data;
});

export const usePosts = () => {
   return useInfiniteQuery("posts", getPosts, {
      getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
   });
};
