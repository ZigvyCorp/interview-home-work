import React, { useEffect, useState } from "react";
import {
  processDescriptionTextOfPost,
  upperCaseFirstChar,
} from "../../utils/processDescriptionTextOfPost";
import CommentItem from "../CommentItem";
import { Collapse } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const PostItem = ({
  title = "",
  body = "",
  id,
  userName = "",
  comments = [],
  isDetail = false,
}) => {
  const [toggle, setToggle] = useState(false);
  const toggleFunc = () => setToggle(!toggle);
  const history = useHistory();
  const onSeeDetail = () => {
    if (isDetail) return;
    history.push(`/posts/${id}`);
  };

  useEffect(() => {
    if (isDetail) {
      setToggle(true);
    }
  }, [isDetail]);

  return (
    <div className="border border-1 border-secondary p-3 pb-5 mb-3 rounded">
      <h3 role="button" onClick={onSeeDetail} className="mt-2 mb-4 text-center hover-text-primary title-post">
        {upperCaseFirstChar(title)}
      </h3>

      <div className="d-flex flex-column align-items-start">
        <p>{`Author: ${userName}`}</p>
        <p>Created at: Sep 20, 2028</p>
        <p>
          {isDetail
            ? upperCaseFirstChar(body)
            : processDescriptionTextOfPost(body)}
        </p>
      </div>

      <div className="border-bottom pb-3">
        <button
          aria-controls="collapseComment"
          aria-expanded={toggle}
          onClick={toggleFunc}
          className="border-0 bg-white text-secondary cursor-pointer"
        >{`${comments.length} replies`}</button>
      </div>

      <Collapse in={toggle} className="p-3">
        <div id="collapseComment">
          {comments?.map((c, index) => (
            <CommentItem
              key={`comment-${index}`}
              body={c.body}
              email={c.email}
            />
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default PostItem;
