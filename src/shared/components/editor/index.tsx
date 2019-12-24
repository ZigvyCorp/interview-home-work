import React from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import Toolbar from "./editor.toolbar";
import { stateToHTML } from "draft-js-export-html";
import TagsInput from "react-tagsinput";
import { Styled } from "./editor.styled";
import { useSelector, useDispatch } from "react-redux";
import { createPostSelector } from "src/routes/createPost/createPost.selector";
import { actionAlert } from "src/routes/createPost/createPost.actions";

interface IProps {}

export const EditorContext = React.createContext({});

const PostEditor = (props: IProps) => {
  const { alert } = useSelector(createPostSelector);
  const dispatch = useDispatch();
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const [state, setState] = React.useState({
    title: "",
    tags: []
  });
  const canAddTags = state.tags.length < 6;
  const handleChangeTitle = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const handleKeyCommand = (command: any, editorState: any) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };
  React.useEffect(() => {
    if (alert.type === "error") {
      dispatch(actionAlert({ type: "", content: "" }));
    }
    const data = {
      ...state,
      content: stateToHTML(editorState.getCurrentContent())
    };
    localStorage.setItem("post", JSON.stringify(data));
  }, [editorState, state.tags, state.title]);

  return (
    <EditorContext.Provider
      value={{
        editorState,
        setEditorState
      }}
    >
      <Styled className="editor">
        <input
          type="text"
          className="post-title"
          value={state.title}
          onChange={handleChangeTitle}
          placeholder="Title..."
          name="title"
        ></input>
        <TagsInput
          value={state.tags}
          onChange={(tags: any) =>
            canAddTags ? setState({ ...state, tags }) : false
          }
        />
        <Toolbar />
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          placeholder="Type here"
        />
      </Styled>
    </EditorContext.Provider>
  );
};

export default PostEditor;
