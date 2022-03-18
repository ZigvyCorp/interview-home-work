import axios from "axios";
import { useQuery } from "react-query";
import { catchAsyn } from "@/utils/catchAsyn";
import { message } from "antd";

const getPostsName = catchAsyn(async () => {
   const { data } = await axios.get("/api/posts/name");
   return data;
});

export const usePostsName = () => {
   return useQuery(["getPostsName"], getPostsName, {
      //   onSuccess: (products) => {},
      onError: (err) => {
         console.log(err);
         message.error(`Error ${err.message}`);
      },
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      retry: 1,
   });
};
