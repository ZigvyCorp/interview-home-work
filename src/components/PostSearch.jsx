import React from "react";
import { Alert, Spin } from "antd";
import Post from "./Post";
import { useSearchPost } from "@/hook/useSearchPost";
import { useRouter } from "next/router";
import BackTop from "./BackTop";

const PostsSearch = () => {
   const router = useRouter();
   const { data, isLoading, isSuccess, error } = useSearchPost(
      router.query.keyword,
      router.isReady
   );

   if (error)
      return (
         <Alert
            className="text-center"
            message="Something went wrong"
            type="error"
         />
      );

   return (
      <>
         <Spin tip="Loading..." spinning={isLoading} size="large">
            {isLoading ? (
               <div className="h-screen"></div>
            ) : (
               isSuccess && (
                  <div className="space-y-5">
                     {data.posts.length === 0 ? (
                        <Alert
                           message="There are no posts with this name"
                           type="warning"
                        />
                     ) : (
                        data.posts.map((post) => (
                           <div key={post.id} className="">
                              <Post post={post} />
                           </div>
                        ))
                     )}
                  </div>
               )
            )}
         </Spin>
         <BackTop />
      </>
   );
};

export default PostsSearch;
