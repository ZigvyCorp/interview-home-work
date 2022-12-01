import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useClickOutside, useDebounce, useViewport } from "../../hooks";
import postApi from "../../api/postApi";
import SearchItem from "./SearchItem";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [windowWidth] = useViewport();

  const debouncedValue = useDebounce(searchValue, 500);
  const ref = useRef();
  useClickOutside(ref, () => setShowResult(false));

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const res = await postApi.getListPost(1,debouncedValue);
      setSearchResult(res.posts);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleChangeInput = async (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div className="d-flex position-relative" ref={ref}>
      <form className="input-group input-group-sm" role="search">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="searchValue"
          value={searchValue}
          onChange={handleChangeInput}
          onFocus={() => setShowResult(true)}
        />
        <Link to={`/posts?query=${searchValue}`}>
          <button
            className="btn btn-danger"
            type="submit"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            {loading && windowWidth >= 992 ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Search"
            )}
          </button>
        </Link>
      </form>
      {showResult && (
        <ul className="list-group top-100 mt-2 position-absolute w-100">
          {searchResult.length > 0 &&
            searchResult.map((result, index) => (
              <SearchItem
                key={index}
                result={result}
                setSearchValue={setSearchValue}
                onClick={() => console.log(result)}
              />
            ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
