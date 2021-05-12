import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

Comment.propTypes = {};

function Comment(props) {

  const combineDataList = useSelector((state) => state.combineData.combineData);

  console.log('combine list', combineDataList)

  const renderData = useCallback(() => {
    //I dont know how to render them with corresponding data, meaning. So I use 3 first item for the demo T_T
    return combineDataList.slice(0,3).map((data, index) => (
      <div
        key={index}
        className="px-3 border-dark text-left d-flex"
      >
          <span className="rounded-circle">
              <img width="40" height="40" src="https://haymora.com/upload/images/cong_nghe_thong_tin/software/zigvy_corporation/logo-zigvy.jpg" alt="" srcset="" />
          </span>
          <div className="px-3">
              <p className="mb-0 text-left text-secondary">{data.company.name}</p>
              <p className="mb-1 text-dark">{data.body}</p>
              <p className="text-secondary">Reply to</p>
          </div>
      </div>
    ));
  }, [combineDataList]);

  return (
    <div className="container">
      {renderData()}
    </div>
  );
}

export default Comment;
