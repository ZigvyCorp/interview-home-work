import { useDispatch, useSelector } from "react-redux";
import { setListPost } from "../../redux/postSlice";
import React, { useEffect, useState } from "react";
import { I_Post } from "../../model/postInterface";
import { postAPI } from "../../services/api";
import { Comment } from "../../components/Comment/Comment";
import { Tag } from "antd";
import moment from "moment";
import { NavLink } from "react-router-dom";

export const HomePage: React.FC = () => {
  let [posts, setPosts] = useState<I_Post[]>([]);
  const { searchPosts, status } = useSelector((state: any) => state.postSlice);
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();

  useEffect(() => {
    let getPosts = async () => {
      try {
        let res = await postAPI.getListPost();
        if (res.status === 200) {
          if (page === 1) {
            setPosts(res.data.content);
            dispatch(setListPost(res.data.content));
          } else {
            setTimeout(() => {
              setPosts((prevPosts) => [...prevPosts, ...res.data.content]);
            }, 1500);
          }
        }
      } catch (error: any) {
        throw new Error(error);
      }
    };
    getPosts();
  }, [page, dispatch]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop > documentHeight - windowHeight - 100) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  let data = status ? searchPosts : posts;

  return (
    <main className={`py-10 bg-[#edf2f6] ${status ? "h-screen" : ""}`}>
      <div className='container_app space-y-10'>
        {data &&
          data.map((item: I_Post, index: number) => {
            return (
              <div
                key={index}
                className='bg-white p-8 border-[1px] border-[#e6ecf5] hover:shadow-2xl hover:-translate-y-1 duration-500  '>
                <NavLink to={`/detail/${item._id}`}>
                  <h1 className='text-center text-4xl font-bold'>{item.title}</h1>
                  <div className='flex justify-between items-center my-4'>
                    <div id='owner' className='text-lg'>
                      <h3>
                        <span className='font-semibold'>Author:</span> {item.userId.name}
                      </h3>
                      <p>
                        <span className='font-semibold'>Create at:</span>{" "}
                        {moment(item.createdAt).format("LLL")}
                      </p>
                    </div>
                    <div id='tags' className='w-60'>
                      {item.tags.map((tag, index) => {
                        return (
                          <Tag color={`#${Math.floor(Math.random() * 1000)}`} key={index}>
                            {tag}
                          </Tag>
                        );
                      })}
                    </div>
                  </div>
                  <div id='content'>
                    {item.content.length > 100 ? item.content.slice(0, 100) + "..." : item.content}
                  </div>
                </NavLink>
                <div id='comments' className='mt-3'>
                  <Comment comments={item.comments} />
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
};
