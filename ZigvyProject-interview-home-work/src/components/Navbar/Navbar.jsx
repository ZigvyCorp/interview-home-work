import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilterPostsStart, resetFilterData } from "../../redux/post/postSlice";

import logo from "../../assets/logo.svg";
import { Input, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getAllPostByTitle } from "../../api/postsApi.js";
const Navbar = () => {
  const dispatch = useDispatch();
  const { data, loading, totalData, filterData } = useSelector((state) => state.posts);
  const [search, setSearch] = useState("");
  const [debouncedInputValue, setDebouncedInputValue] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(search);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [search, 500]);

  useEffect(() => {
    if (debouncedInputValue) {
      const fetchPostByTitle = async () => {
        try {
          // let res = await getAllPostByTitle({
          //   debouncedInputValue,
          //   page: 1,
          //   limit: 5,
          // });
          dispatch(fetchFilterPostsStart({title: debouncedInputValue, page: 1, limit: 5 })); // Dispatch action để fetch posts từ API khi component được mount
        
        } catch (error) {
          console.error(error);
        }
      };
      fetchPostByTitle()
    } else {
      dispatch(resetFilterData()); // Dispatch action để fetch posts từ API khi component được mount
    }
  }, [debouncedInputValue]);

  return (
    <div className="container fixed top-0 z-10 bg-black h-16 flex justify-between items-center p-3">
      <div className="flex items-center gap-4">
        <img className="w-[100px]" src={logo} alt="logo" />
        <Input
          value={search}
          onChange={handleSearch}
          placeholder="Search blogs..."
        />
      </div>
      <p className="text-white">Blogs</p>
      <div className="flex items-center gap-4">
        <Avatar size={64} icon={<UserOutlined />} />
        <p className="text-white">Giao</p>
      </div>
    </div>
  );
};

export default Navbar;
