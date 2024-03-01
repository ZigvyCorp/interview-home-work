import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { I_Post } from "../../model/postInterface";
import { commentAPI, postAPI } from "../../services/api";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";
import moment from "moment";
import { Tag } from "antd";
import { InfoOwner } from "./InfoOwner";
import { Comment } from "../../components/Comment/Comment";
import { I_Comment } from "../../model/commentInterface";

export const DetailPost: React.FC = () => {
  const { id } = useParams<string>();
  let [post, setPost] = useState<I_Post | null>(null);
  let [comments, setComments] = useState<I_Comment[] | null>(null);

  const getPost = async () => {
    try {
      let res = await postAPI.getPostById(id);
      if (res.status === 200) {
        setPost(res.data.content);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };
  const getComment = async () => {
    try {
      let res = await commentAPI.getCmtByPostId(id);
      if (res.status === 200) {
        setComments(res.data.content);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getPost();
    getComment();
  }, [id]);

  return (
    <section id='detail__post' className='bg-[#edf2f6]'>
      <div className='mx-10'>
        <div className='grid grid-cols-5 gap-5'>
          <div className='text-center pt-20'>
            <ButtonBack />
          </div>
          <div id='content' className='flex flex-col space-y-12 bg-white col-span-3 p-5'>
            <h1 className='text-center text-4xl font-bold'>{post?.title}</h1>
            <div className='flex justify-between items-center my-6'>
              <div className='text-lg'>
                <h3>
                  <span className='font-semibold'>Author: </span>
                  {post?.userId.name}
                </h3>
                <p>
                  <span className='font-semibold'>Create at: </span>
                  {moment(post?.createdAt).format("LLL")}
                </p>
              </div>

              <div>
                <img src={`https://picsum.photos/400/200`} className='rounded-xl' />
              </div>
            </div>
            <p>{post?.content}</p>
            <div id='tags' className='py-3 border-t-[#ccc] border-t-[1px]'>
              <span>Tags: </span>
              {post?.tags.map((tag, index) => {
                return (
                  <Tag color={`#${Math.floor(Math.random() * 1000)}`} key={index}>
                    {tag}
                  </Tag>
                );
              })}
            </div>
            {comments && <Comment comments={comments} />}
          </div>
          <InfoOwner info={post?.userId} />
        </div>
      </div>
    </section>
  );
};
