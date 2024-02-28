import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest } from "../redux/post/postsSlice";
import { setSearchTerm } from "../redux/post/searchTerm";

function Header() {
    const { searchTerm } = useSelector((state) => state.searchTerm);
    const currentPage = useSelector((state) => state.currentPage.currentPage);

    const dispatch = useDispatch();
    useEffect(() => {
        let debounceTimeout;

        const handleDebounce = () => {
            dispatch(getPostsRequest({ page: currentPage, searchTerm }));
        };

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }
        debounceTimeout = setTimeout(handleDebounce, 300);

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [searchTerm, dispatch, currentPage]);

    return (
        <div className="flex gap-2 justify-between border-2 border-gray-100 rounded-md p-3 bg-gray-100">
            <Link to="/">
                <img src={Logo} className="w-[40px]" />
            </Link>
            <div>
                <form className="bg-white p-2  rounded-lg flex items-center">
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="bg-transparent focus:outline-none w-24 sm:w-48"
                        value={searchTerm}
                        onChange={(e) =>
                            dispatch(setSearchTerm(e.target.value))
                        }
                    />
                    <button type="button">
                        <FaSearch className="text-slate-600" /> {""}
                    </button>
                </form>
            </div>
            <div className="flex gap-3 items-center font-semibold cursor-pointer">
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                <Link to="/" className="hover:underline">
                    Blogs
                </Link>
            </div>
            <div className="flex gap-3 items-center">
                <div className="flex gap-3 items-center">
                    <Avatar
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                    />
                    <span> Dien Chau</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
