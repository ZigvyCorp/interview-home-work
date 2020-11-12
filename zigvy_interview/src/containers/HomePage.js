import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Post } from "../components";

import { fetchPostStarted, selectPost } from "../slices/postSlice";
import { getUserInfoStarted, selectUserInfo } from "../slices/useInfoSlice";
import { fetchCommentStarted, selectComment } from "../slices/commentSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(selectPost);
  const { info } = useSelector(selectUserInfo);
  const { comments } = useSelector(selectComment);

  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    dispatch(fetchPostStarted())
    dispatch(getUserInfoStarted())
    dispatch(fetchCommentStarted())
  }, [dispatch]);

  const renderPost = () => {
    return data.map(({ title, body, id, userId }) => {
      let userName = info.find(item => userId === item.id)
      return ( 
      <Post 
        key={id} 
        userName={userName?.name} 
        title={title} 
        body={body}
        replyVisible={isVisible} 
        handleReplyToggle={() => setVisible(!isVisible)} />
      );
    });
  };

  return (
    <div>
      {data && renderPost()}
    </div>
  );
};

export default HomePage;
