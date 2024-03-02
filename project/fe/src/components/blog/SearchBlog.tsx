import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { getApi } from "../../utils/fetch.ts";
import { Link } from "wouter";

const SearchBlog = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const delay = setTimeout(async () => {
      if (searchValue.length < 2) return setBlogs([]);
      try {
        const searchBlog = async () =>
          await getApi(`/api/search/blog?title=${searchValue}`).then((res) =>
            setBlogs(res),
          );
        searchBlog();
      } catch (error) {
        console.log(error);
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [searchValue]);
  return (
    <div className="search-box">
      <Input
        prefix={<SearchOutlined />}
        placeholder="Search Blog"
        style={{ width: 500 }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue.length > 2 && (
        <ul className="search-results">
          {" "}
          {blogs.map((item, index) => (
            <li key={index} style={{ margin: "10px" }}>
              <Link to={`/detail/${item._id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBlog;
