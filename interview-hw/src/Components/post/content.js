import React from "react";
import Box from "./box";
import "./post.css";
const PostContent = () => {
  return (
    <div className="mx-3">
      <h1 className="text-center display-5 mt-4">Post title 1</h1>
      <div className="subTitle d-flex justify-content-between">
        <div>
          <p className="fw-semibold">Author: John Smith</p>
          <p>Created at: Sep 20, 2018</p>
        </div>
        <div className="row mx-0 flex-wrap w-25">
          <Box text="magenta" bgColor="#fff" />
          <Box text="red" bgColor="#fff" />
          <Box text="volcano" bgColor="#fff" color="#ec7751" />
          <Box text="orange" bgColor="#fff" />
          <Box text="gold" bgColor="#fff" />
          <Box text="lime" bgColor="#fff" />
          <Box text="green" bgColor="#fff" />
          <Box text="cyan" bgColor="#fff" />
          <Box text="blue" bgColor="#fff" />
          <Box text="geekblue" bgColor="#fff" color="blue" />
          <Box text="purple" bgColor="#fff" />
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
        convallis leo. Suspendisse sed egestas sapien. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Duis pretium velit in sapien
        porttitor condimentum. In consectetur sagittis ante vel rutrum. Etiam
        ullamcorper quam a velit bibendum auctor. Nulla in auctor arcu.
      </div>
    </div>
  );
};

export default PostContent;
