import React, { useEffect, useState } from "react";
import {
  getAllCommentsByPostId,
  getCommentCountByPostId,
} from "../apis/commentsApis";

import Reply from "./Reply";

const CollapseComments = (props) => {
  const { idBlog } = props;
  const [countComments, setCountComments] = useState(0);
  const [listComments, setListComments] = useState([]);
  useEffect(() => {
    const getCountComments = async () => {
      const rs = await getCommentCountByPostId({ bid: idBlog });
      setCountComments(rs?.data?.commentCount);
    };
    getCountComments();
  }, [idBlog]);

  const handleGetComments = async () => {
    const rs = await getAllCommentsByPostId({ bid: idBlog });
    setListComments(rs?.data || []);
  };

  return (
    <div>
      <p
        onClick={handleGetComments}
        type="button"
        data-toggle="collapse"
        data-target={`#reply${idBlog}`}
        aria-expanded="false"
        aria-controls="collapseExample"
        className="d-flex align-items-center"
      >
        <p>{countComments} replies</p>
        <span className="material-symbols-outlined mt-1">expand_more</span>
      </p>
      <div className="collapse reply-collapse" id={`reply${idBlog}`}>
        {listComments?.map((item, index) => (
          <Reply key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollapseComments;
