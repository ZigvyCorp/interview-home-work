import React from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromHTML,
  ContentState
} from "draft-js";
import Toolbar from "./editor.toolbar";
import { stateToHTML } from "draft-js-export-html";
import TagsInput from "react-tagsinput";
import { Styled } from "./editor.styled";
import { useSelector, useDispatch } from "react-redux";
import { createPostSelector } from "src/routes/createPost/createPost.selector";
import { actionAlert } from "src/routes/createPost/createPost.actions";
import { postSelector } from "src/routes/post/post.selector";

interface IProps {
  id: string;
}

export const EditorContext = React.createContext({});

const PostEditor = (props: IProps) => {
  const { alert } = useSelector(createPostSelector);
  const post = useSelector(postSelector)[props.id].data;
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
    const blocksFromHTML = convertFromHTML(post.content);
    const initEditorState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setState({
      ...state,
      title: post.title,
      tags: post.tags
    });
    setEditorState(EditorState.createWithContent(initEditorState));
  }, [post]);
  React.useEffect(() => {
    if (alert.type === "error") {
      dispatch(actionAlert({ type: "", content: "" }));
    }
    const data = {
      ...state,
      content: stateToHTML(editorState.getCurrentContent())
    };
    localStorage.setItem("updatePost", JSON.stringify(data));
  }, [editorState, state.title, state.tags]);
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
        <Toolbar editorState={editorState} setEditorState={setEditorState} />
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
