import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as actions from "../store/actions";
import { CommentList } from ".";
import { Spin } from "antd";
import { randomDate } from "../utils/randomDate";
import moment from "moment";
import { Button, Input, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);

  const [newComment, setNewComment] = useState("");
  const [create, setCreate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (id) {
      setIsLoading(false);
      setTimeout(() => {
        dispatch(actions.getPostsById(id));
        setIsLoading(true);
      }, 1000);
    }
    window.scrollTo(0, 0);
  }, [dispatch, id, create]);

  return (
    <>
      {isLoading ? (
        <div className="pt-[7rem]">
          <h1 className="text-2xl h-full font-bold">{post.title}</h1>
          <div className="mx-6 pt-6 flex flex-col text-2xl font-normal justify-start items-start mb-4">
            <span>Author: {post.user?.name}</span>
            <span>Created at: {post?.createAt}</span>
          </div>
          <p className="pt-6 text-justify text-xl mx-6">{post.body}</p>
          <div className="pt-5 mx-6">
            <Space.Compact style={{ width: "100%", height: "40px" }}>
              <Input
                placeholder="New comment"
                onChange={(e) => setNewComment(e.target.value)}
                allowClear
              />
              <Button
                className="bg-black h-[40px]"
                type="primary"
                onClick={() => {
                  dispatch(actions.createComment(1, newComment, id));
                  setNewComment("");
                  setCreate(true);
                  window.location.reload();
                }}
              >
                Submit
              </Button>
            </Space.Compact>

            <CommentList comment={post?.comments} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </div>
      )}
    </>
  );
};

export default DetailPage;
