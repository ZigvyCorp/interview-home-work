"use client"
import {useState } from "react";

import { useAppDispatch } from "@/src/redux/hook";
import { fetchPostData } from "@/src/redux/reducers/postState";

const SearchBar = ({setKeyState} : any) => {
  const [searchKey, setSearchKey] = useState("")
  const dispatch = useAppDispatch()

  const handlePressEnter = (event: any) => {
    if(event.code == "Enter") {
      dispatch(fetchPostData({page: 1, key: searchKey}))
      setKeyState(searchKey)
    }
  }

  const onClickSearch = () => {
    dispatch(fetchPostData({page: 1, key: searchKey}))
    setKeyState(searchKey)
  }

  const onInputChange = (event : any) => {
    setSearchKey(event.target.value)
  }
 
  return (
    <div className="w-120px">
      <div className="input-group input-group-lg mb-3">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Search post here..."
        aria-label="Search" 
        aria-describedby="button-addon2"
        value={searchKey}
        onChange={onInputChange}
        onKeyUp={handlePressEnter}
        id="search"
        autoComplete="off"
      />
      <button
        onClick={onClickSearch}
        className="btn btn-outline-secondary bg-green text-white" type="button" id="button-addon2">
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
