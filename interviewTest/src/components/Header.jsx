// import Logo from "../assets/.jfif";
import { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
// import { FaSearch } from "react-icons/fa";
import useDebounce from "../hook/useDebounce";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import {
  clearSearchPost,
  searchPostsStart,
} from "../redux/slices/searchPostslice";
import { AudioOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
const { Search } = Input;
const navLink = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About Us",
    link: "/about-us",
  },
];
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const debounceSearch = useDebounce(searchTerm, 500);
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (searchTerm) {
      dispatch(searchPostsStart({ searchTerm: debounceSearch }));
    } else {
      dispatch(clearSearchPost());
    }
  }, [debounceSearch]);
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  return (
    <div
      className={`${
        isFixed ? "fixed top-0 shadow-lg w-full z-10 " : ""
      } flex bg-white justify-between border-2 border-gray-100 rounded-md p-3`}
    >
      <div className=" flex gap-8 items-center">
        <img
          src={"https://avatars.githubusercontent.com/u/40911893?s=200&v=4"}
          className="w-[40px]"
        />
        <div className="flex gap-3 items-center font-semibold cursor-pointer">
          {navLink.map((el) => {
            const isActive = pathname == el.link;
            return (
              <Link
                key={el.id}
                className={` ${
                  isActive ? "bg-purple-400 text-white" : ""
                } p-1 rounded-lg`}
                to={el.link}
              >
                {el.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <Search
          placeholder="input search text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          style={{
            width: 200,
          }}
        />

        <div className="flex gap-3 items-center">
          <div className="flex gap-3 items-center">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
            <span> Yen Nhi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
