import React, { memo, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Markdown = ({ value, handleChange, errors, touched, name }) => {
  const editorRef = useRef(null);
  return (
    <>
      <Editor
        name={name}
        apiKey={process.env.REACT_APP_TINYMARKDOWN}
        // onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={value}
        onChange={handleChange}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "preview",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      {errors && touched && (
        <p className="text-red-500 text-sm italic">{errors}</p>
      )}
    </>
  );
};

export default memo(Markdown);
