import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_POST_DETAIL_API } from "../../../setup/constants";
import { RootState } from "../../../setup/redux/configStore";

export default function usePostDetail(postId: string | undefined) {
  const dispatch = useDispatch();
  const postDetailData = useSelector(
    (state: RootState) => state.PostDetailReducer.postDetail
  );
  useEffect(() => {
    if (postId) {
      dispatch({
        type: GET_POST_DETAIL_API,
        payload: postId,
      });
    }
  }, [postId]);

  return postDetailData;
}
