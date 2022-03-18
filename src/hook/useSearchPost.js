import axios from "axios";
import { useQuery } from "react-query";
import { catchAsyn } from "@/utils/catchAsyn";
import { message } from "antd";

const searchPost = catchAsyn(async (query) => {
   const { data } = await axios.get(`/api/posts?keyword=${query.keyword}`);
   return data;
});

export const useSearchPost = (keyword, isReady) => {
   return useQuery(
      ["searchPost", { keyword }],
      ({ queryKey }) => searchPost(queryKey[1]),
      {
         //   onSuccess: (products) => {},
         onError: (err) => {
            console.log(err);
            message.error(`Error ${err.message}`);
         },
         refetchOnWindowFocus: false,
         refetchOnMount: true,
         retry: 1,
         enabled: isReady,
      }
   );
};
