import React from "react";
import MDEditor from "@uiw/react-md-editor";

const MarkdownViewComponent = (props) => {
  const { value } = props;
  return (
    <>
      <div className="container" data-color-mode="light">
        <MDEditor.Markdown source={value} />
      </div>
    </>
  );
};
export default MarkdownViewComponent;
