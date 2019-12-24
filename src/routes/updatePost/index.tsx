import React from "react";
import styled from "styled-components";
import Header from "src/shared/components/header";
import Editor from "./childs/editor";
import useTranslate from "src/shared/hooks/useTranslate";
import { useDispatch, useSelector } from "react-redux";
import { actionAlert } from "./updatePost.actions";
import { updatePostSelector } from "./updatePost.selector";
import Alert from "src/shared/components/alert";
import { ACTION_FETCH } from "./updatePost.constant";
import withUpdatePost from "./updatePost.enhance";

interface IProps {
  id: string;
}

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

const EditPost = (props: IProps) => {
  const [translate]: any = useTranslate();
  const { btnSubmit, btnCancel, emptyTitle } = translate.updatePost;
  const { alert, isFetching } = useSelector(updatePostSelector);
  const dispatch = useDispatch();
  const postId = props.id;
  const handleEditPost = () => {
    const data = JSON.parse(localStorage.getItem("updatePost") || "");
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
        id: postId
      }
    });
  };

  return (
    <Styled className="create-post">
      <Header />
      <Editor id={postId} />
      {alert.type === "error" && (
        <Alert type={alert.type} content={alert.content} />
      )}
      <div className="group-btn">
        <button className="btn">{btnCancel}</button>
        <button className={`btn btn-submit`} onClick={handleEditPost}>
          {`${btnSubmit}${isFetching ? "..." : ""}`}
        </button>
      </div>
    </Styled>
  );
};

export default withUpdatePost(EditPost);
