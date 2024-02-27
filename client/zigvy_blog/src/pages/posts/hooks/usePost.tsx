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
