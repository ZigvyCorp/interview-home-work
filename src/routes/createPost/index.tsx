import React, { useContext } from "react";
import styled from "styled-components";
import Header from "src/shared/components/header";
import Editor, { EditorContext } from "src/shared/components/editor";
import useTranslate from "src/shared/hooks/useTranslate";
import { useDispatch, useSelector } from "react-redux";
import { actionAlert } from "./createPost.actions";
import { createPostSelector } from "./createPost.selector";
import Alert from "src/shared/components/alert";
import { ACTION_FETCH } from "./createPost.constant";
import { authSelector } from "src/auth/auth.selector";

interface IProps {}

export const Styled = styled.div`
  .group-btn {
    width: 100%;
    text-align: center;
    margin-top: 30px;
    .btn {
      padding: 0 2%;
    }
  }
  .alert {
    margin: 2% auto;
  }
`;

const CreatePost = (props: IProps) => {
  const [translate]: any = useTranslate();
  const { btnSubmit, btnCancel, emptyTitle } = translate.createPost;
  const { alert, isFetching } = useSelector(createPostSelector);
  const { id } = useSelector(authSelector).data;
  const dispatch = useDispatch();
  const handleCreatePost = () => {
    const data = JSON.parse(localStorage.getItem("post") || "");
    const { title = "", content = "", tags = [] } = data;
    if (!title) {
      return dispatch(
        actionAlert({
          type: "error",
          content: emptyTitle
        })
      );
    }
    dispatch({
      type: ACTION_FETCH,
      payload: {
        ...data,
        owner: id
      }
    });
  };

  return (
    <Styled className="create-post">
      <Header />
      <Editor />
      {alert.type === "error" && (
        <Alert type={alert.type} content={alert.content} />
      )}
      <div className="group-btn">
        <button className="btn">{btnCancel}</button>
        <button className={`btn btn-submit`} onClick={handleCreatePost}>
          {`${btnSubmit}${isFetching ? "..." : ""}`}
        </button>
      </div>
    </Styled>
  );
};

export default CreatePost;
