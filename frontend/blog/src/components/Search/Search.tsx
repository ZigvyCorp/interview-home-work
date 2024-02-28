import { Input } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchBlogSuccess } from "../../redux/redux/action";
import { useNavigate } from "react-router-dom";
export const Search = () => {
  const { Search } = Input;
  const blog = useSelector((state: any) => state.blogs);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    const results = blog.data?.filter((post: IPost) =>
      post.tags.some((tag) => tag.includes(value.toLowerCase()))
    );
    console.log("object ", results);
    dispatch(searchBlogSuccess(results || []));
    navigate("/search");
  };

  return (
    <div className="h-full flex w-full">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        className="w-full"
      />
    </div>
  );
};
