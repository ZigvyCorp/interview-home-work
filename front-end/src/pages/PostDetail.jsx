import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getPostDetailFetch } from "../actions";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { postDetail, isLoading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    // call api
    dispatch(getPostDetailFetch(id));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="my-5 ">
          <p className="text-center text-3xl font-bold">{postDetail.title}</p>

          <div className="font-semibold mt-3">
            <span>
              Author:
              <span className="ml-1">{postDetail.author}</span>
            </span>
            <p>Created At: Nov 09, 2023</p>
          </div>

          <div className="mt-5 mb-9 ">
            <p>{postDetail.body}</p>
          </div>

          {postDetail.comment.map((cmt) => {
            return (
              <div className="flex mt-5 mb-7">
                <div className="w-[10%]">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrdr1GgmLfN6Ln3VjFFzFAhQqXwLjlpFS9g&usqp=CAU"
                    alt="#"
                    className="w-16 h-16"
                  />
                </div>

                <div className="ml-5 w-[90%]">
                  <div className="flex items-center">
                    <p className="mr-3 text-sm text-gray-500">{cmt.name}</p>
                    <p className="text-gray-400">a day ago</p>
                  </div>

                  <p className="mt-1 mb-4">{cmt.body}</p>

                  <p className="text-gray-400 text-sm">Reply to</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="text-3xl h-[90vh] flex justify-center items-center">
          Loading...
        </h1>
      )}
    </>
  );
};

export default PostDetail;
