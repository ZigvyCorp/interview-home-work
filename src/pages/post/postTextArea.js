import React from "react";
import Input from "../../utilities/formComponents/Input";

const PostTextArea = ({ label, onChange }) => {
  return (
    <div className="my-3 row align-items-center justify-content-center">
      {label && (
        <div className="col-1">
          <span>{label}</span>
        </div>
      )}
      <div className="col-8"></div>
      <div className="col-9">
        <textarea
          className="w-100"
          onChange={
            onChange
              ? (e) => {
                  const value = e.target.value;
                  onChange(value);
                }
              : null
          }
        />
      </div>
    </div>
  );
};

export default PostTextArea;
