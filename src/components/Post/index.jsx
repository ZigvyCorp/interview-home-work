import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

Post.propTypes = {};

function Post(props) {

  const combineDataList = useSelector((state) => state.combineData.combineData);

  
  return (
    <div className="container">
      {renderData()}
    </div>
  );
}

export default Post;
