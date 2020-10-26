import React from "react";
import "./loading.scss";
import { useLoading } from "./useLoading.hook";

const Loading = () => {
  const { isLoading } = useLoading();
  console.log('isLoading', isLoading)

  return isLoading ? (
    <div className="loading-section">
      <div className="overlay-background"></div>
      <div className="loader"></div>
    </div>
  ) : null;
}

export default Loading