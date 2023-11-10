import React, { useCallback, useEffect } from "react";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import Post from "../components/Post/index";
import { useDispatch, useSelector } from "react-redux";
import {
  commentsState$,
  postsState$,
  userCurrentState$,
  userState$,
} from "../redux/selectors/index";
import AddIcon from "@mui/icons-material/Add";
import * as actions from "../redux/actions";
import AddPost from "../components/CreatePost/index";
export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  const comments = useSelector(commentsState$);

  const postsWithComments = posts?.map((post) => {
    const postComments = comments.filter(
      (comment) => comment.post === post._id
    );
    return {
      ...post,
      comments: postComments,
    };
  });
  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
    dispatch(actions.getComments.getCommentsRequest());
  }, [dispatch]);
  const handleOpenModalPost = useCallback(() => {
    dispatch(actions.showModal());
  }, [dispatch]);
  return (
    <div>
      <AddPost />
      <Header />
      <div className=" mt-4 ">
        <div className=" w-full fixed top-[100px]">
          <Button
            onClick={handleOpenModalPost}
            className="border-[2px] border-cyan-600 rounded-[50%] mt-3 mr-6 hover:bg-cyan-200 float-right "
          >
            <AddIcon style={{ fontSize: 30 }} />
          </Button>{" "}
        </div>
      </div>
      <>
        {postsWithComments?.map((item) => (
          <div key={item._id} className="border-b-[2px] border-black">
            <Post item={item} />
          </div>
        ))}
      </>
    </div>
  );
}
