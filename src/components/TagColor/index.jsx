import React from "react";
import PropTypes from "prop-types";
import "./TagColor.scss";
TagColor.propTypes = {};

function TagColor(props) {
  return (
    <>
      <div className="test__section d-flex justify-content-between">
        <span className="magneta__section rounded pl-1 pr-1 ">
          magneta
        </span>
        <span className="red__section rounded pl-1 pr-1 ">red</span>
        <span className="volcano__section rounded pl-1 pr-1 ">
          volcano
        </span>
        <span className="orange__section rounded pl-1 pr-1 ">
          orange
        </span>
        <span className="gold__section rounded pl-1 pr-1 ">gold</span>
      </div>
      <div className="d-flex justify-content-start mt-1">
        <span className="lime__section rounded pl-1 pr-1 ">lime</span>
        <span className="green__section rounded pl-1 pr-1 ">green</span>
        <span className="cyan__section rounded pl-1 pr-1 ">cyan</span>
        <span className="blue__section rounded pl-1 pr-1 ">blue</span>
        <span className="geekblue__section rounded pl-1 pr-1 ">
          geekblue
        </span>
      </div>
      <div className="text-left mt-1">
        <span className="purple__section rounded pl-1 pr-1 ">purple</span>
      </div>
    </>
  );
}

export default TagColor;
