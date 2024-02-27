// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GET_POST_DATA_API } from "../../../setup/constants";
// import { RootState } from "../../../setup/redux/configStore";

// export const usePost = () => {
//   const dispatch = useDispatch();
//   const postData = useSelector(
//     (state: RootState) => state.PostReducer.postsData
//   );
//   useEffect(() => {
//     dispatch({
//       type: GET_POST_DATA_API,
//     });
//   }, []);
//   return postData;
// };


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GET_POST_DATA_API } from "../../../setup/constants";
// import { RootState } from "../../../setup/redux/configStore";

// export const usePost = (page: number) => {
//   const dispatch = useDispatch();
//   const postData = useSelector(
//     (state: RootState) => state.PostReducer.postsData
//   );

//   useEffect(() => {
//     dispatch({
//       type: GET_POST_DATA_API,
//       payload: { page }, // Pass page parameter to the action
//     });
//   }, [dispatch, page]); // Trigger effect when page changes

//   return postData;
// };


// // usePost.ts
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GET_POST_DATA_API } from "../../../setup/constants";
// import { RootState } from "../../../setup/redux/configStore";

// export const usePost = () => {
//   const dispatch = useDispatch();
//   const postData = useSelector(
//     (state: RootState) => state.PostReducer.postsData
//   );
//   const [loading, setLoading] = useState<boolean>(true); // Add loading state

//   useEffect(() => {
//     dispatch({
//       type: GET_POST_DATA_API,
//     });
//   }, [dispatch]);

//   useEffect(() => {
//     setLoading(postData === null); // Update loading state based on postData
//   }, [postData]);

//   return { postData, loading }; // Return loading state along with postData
// };


// usePost.ts
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_POST_DATA_API } from "../../../setup/constants";
import { RootState } from "../../../setup/redux/configStore";



export const usePost = () => {
  const dispatch = useDispatch();
  const postData = useSelector(
    (state: RootState) => state.PostReducer.postsData
  );

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch({
      type: GET_POST_DATA_API,
      payload: { page: currentPage},
    });
  }, [dispatch, currentPage]);


  const fetchMorePosts = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  

  return { postData, fetchMorePosts }; 
};
