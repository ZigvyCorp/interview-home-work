import React, { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { usePosts } from "@/hook/usePosts";
import { useInView } from "react-intersection-observer";
import { Alert, Spin } from "antd";

import Post from "./Post";
import BackTop from "./BackTop";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Posts = () => {
   const { ref, inView } = useInView();
   const {
      data,
      error,
      isFetchingNextPage,
      isLoading,
      fetchNextPage,
      hasNextPage,
   } = usePosts();

   useEffect(() => {
      if (inView) {
         fetchNextPage();
      }
   }, [fetchNextPage, inView]);
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
         <div>
            <Spin tip="Loading..." spinning={isLoading} size="large">
               {isLoading ? (
                  <div className="h-screen"></div>
               ) : (
                  <div className="">
                     {data.pages.map((page, i) => (
                        <div key={i}>
                           {page.posts.map((post) => (
                              <div key={post.id} className="mb-5">
                                 <Post post={post} />
                              </div>
                           ))}
                        </div>
                     ))}
                  </div>
               )}
            </Spin>

            <div className="text-center">
               <button
                  ref={ref}
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetchingNextPage}
               >
                  {isFetchingNextPage ? (
                     <div className="flex justify-center items-center h-40">
                        <Spin indicator={antIcon} />
                     </div>
                  ) : hasNextPage ? (
                     "Load Newer"
                  ) : (
                     "Nothing more to load"
                  )}
               </button>
            </div>
         </div>
         <BackTop />
      </>
   );
};

export default Posts;
