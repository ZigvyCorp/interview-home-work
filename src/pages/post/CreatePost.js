import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  createPostAction,
  clearCreatePostStatusAction,
} from "../../actions/actionCreator";
import PostInput from "./postInput";
import PostTextArea from "./postTextArea";
import Button from "../../utilities/formComponents/button";
import Error from "../../utilities/Error";
import { Redirect } from "react-router-dom";

const CreatePost = ({
  user,
  error,
  success,
  clearCreatePostStatusAction,
  createPostAction,
}) => {
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    return () => clearCreatePostStatusAction();
  }, []);

  const generateTagElement = () =>
    tags.map((tag, index) => (
      <span
        className="border border-dark m-1 p-1 rounded bg-white cursor-pointer"
        onClick={() => {
          onTagClick(index);
        }}
        key={Math.random()}
      >
        {tag}
      </span>
    ));

  const onTagClick = (index) => {
    const newTagList = [...tags];
    newTagList.splice(index, 1);
    setTags(newTagList);
  };

  const onTagInputEnterKeypressed = (e) => {
    if (e.key === "Enter") {
      const tagValue = e.target.value;
      e.target.value = "";
      tagValue &&
        !tags.includes(tagValue) &&
        setTags([...tags].concat(tagValue));
    }
  };

  const onCreatePostClick = () => {
    createPostAction({ title, tags, content, ...user });
  };

  if (success) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container p-4 border border-primary center-element">
      <PostInput label="Title" onChange={(value) => setTitle(value)} />
      <div>
        <PostInput label="Tags" onKeypressed={onTagInputEnterKeypressed} />
        <div className="row justify-content-center align-items-center wrap">
          <div className="col-9 row">{generateTagElement()}</div>
        </div>
      </div>
      <PostTextArea label="Content" onChange={(value) => setContent(value)} />
      <Button className="mx-auto" onClick={onCreatePostClick}>
        Create Post
      </Button>
      {error && <Error>{error}</Error>}
    </div>
  );
};

const mapStateToProps = (state) => {
  const user = _.get(state, "user.response.data");
  const error = _.get(state, "blog.error");
  const success = _.get(state, "blog.success");
  return { user, error, success };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPostAction: (info) => dispatch(createPostAction(info)),
    clearCreatePostStatusAction: () => dispatch(clearCreatePostStatusAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
