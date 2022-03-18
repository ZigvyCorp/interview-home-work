import axios from "axios";
import { useQuery } from "react-query";
import { catchAsyn } from "@/utils/catchAsyn";

const getPostById = catchAsyn(async (query) => {
   const { data } = await axios.get(`/api/posts/${query.id}`);
   return data;
});

export const usePostById = (id, isReady) => {
   return useQuery(
      ["getPostById", { id }],
      ({ queryKey }) => getPostById(queryKey[1]),
      {
         //   onSuccess: (products) => {},
         onError: (err) => {
            console.log(err);
            message.error(`Error ${err.message}`);
         },
         enabled: isReady,
         refetchOnWindowFocus: false,
         refetchOnMount: true,
         retry: 1,
      }
   );
};
