import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState();

  const handleOnChangeInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClickSearchBtn = () => {
    if (searchInput) {
      navigate(`/search?keyword=${searchInput}`);
      setSearchInput("");
    }
  };

  return (
    <div className="relative">
      <input
        onChange={handleOnChangeInput}
        value={searchInput}
        className="pl-[10px] pr-[20px] py-[5px] text-[16px] border-solid border-[2px] border-[black] rounded-[10px]"
        type="text"
      />
      <SearchOutlined
        onClick={handleClickSearchBtn}
        className="absolute right-[4px] text-[25px] top-[5px] cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
