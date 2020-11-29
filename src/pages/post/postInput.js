import React from "react";
import Input from "../../utilities/formComponents/Input";

const PostInput = ({ label, onKeypressed, onChange }) => {
  return (
    <div className="my-3 row align-items-center justify-content-center">
      {label && (
        <div className="col-1">
          <span>{label}</span>
        </div>
      )}
      <div className="col-8">
        <Input
          inline
          className="w-100"
          onKeypressed={onKeypressed}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PostInput;
