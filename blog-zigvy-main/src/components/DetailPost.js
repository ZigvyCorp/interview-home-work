import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglepost, singlepostSelector } from "../store/reducers/postSlice";

const DetailPost = () => {
  const { id } = useParams();
  const singlePost = useSelector(singlepostSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglepost(id));
  }, [dispatch]);

  return (
    <div className="detail-post">
      <h1>{singlePost && singlePost.title}</h1>
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt="Italian Trulli"
      />
      <h6>{singlePost && singlePost.body}</h6>
    </div>
  );
};

export default DetailPost;
