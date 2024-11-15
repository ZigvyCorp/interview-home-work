import { useQuery } from "@tanstack/react-query";
import { getData } from "../../../apis/callApi";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { Flex } from "antd";
import { VscAccount } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import CreateComment from "./createNewComment";
const Comments = ({ postIdProp }: any) => {
  const [existCmt, setExistCmt] = useState<any>({
    status: false,
    postId: "",
    comments: [],
  });
  const toggleComments = async () => {
    try {
      if (existCmt.status) {
        setExistCmt({
          status: false,
          postId: "",
          comments: [],
        });
      } else {
        const response = await getData(`/comments?postId=${postIdProp}`);
        if (response?.data) {
          setExistCmt({
            status: true,
            postId: postIdProp,
            comments: response?.data,
          });
        } else {
          if (response?.error?.status === 404) {
            setExistCmt({
              status: true,
              postId: postIdProp,
              comments: [],
            });
          }
        }
      }
    } catch (error) {
      setExistCmt({
        status: true,
        postId: postIdProp,
        comments: [],
      });
      console.log("error", error);
    }
  };

  return (
    <div className="pl-3">
      <Flex className="pb-4 pt-8 items-center ">
        <span className="pr-3">Replies</span>
        <MdExpandMore className="w-[28px] h-[28px]" onClick={toggleComments} />
      </Flex>
      {existCmt?.status ? (
        <>
          <CreateComment postIdProp={postIdProp} />
          {existCmt?.comments?.length ? (
            existCmt?.comments?.map((comment: any) => (
              <Flex className="pt-3 pb-10">
                <VscAccount className="w-[50px] h-[45px] mr-5" />
                <div>
                  <Flex className="pb-3 items-center">
                    <span>{comment?.owner?.username}</span>
                    <small className="pl-2">a day ago</small>
                  </Flex>
                  <div className="p">
                    <span>{comment?.content}</span>
                  </div>
                  <br />
                  <span>Reply to</span>
                </div>
              </Flex>
            ))
          ) : (
            <div>No comment</div>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Comments;
