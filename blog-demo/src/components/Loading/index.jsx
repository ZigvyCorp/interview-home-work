import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
  const { isLoading } = useSelector((state) => state.loadingReducer);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: "rgba(0, 0, 0, 0.9)",
            zIndex: "2000",
          }}
        >
          <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <span
              style={{ fontSize: "3rem", color: "red", userSelect: "none" }}
            >
              Loading...
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Loading;
