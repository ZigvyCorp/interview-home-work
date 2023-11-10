import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchFetch } from "../redux/searchSlice";
import PostItem from "../components/PostItem";

export default function Search() {
    const { searchResult, isLoading } = useSelector(state => state.search);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSearch = () => {
        dispatch(searchFetch(searchQuery));
        setSearchQuery("");
    }

    return (
        <div className="container-md d-flex flex-column justify-content-center align-items-center mt-5">
            <div className="input-group w-50">
                <input
                    value={searchQuery}
                    type="search"
                    className="form-control rounded"
                    placeholder="Search post"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={handleChange}
                />
                <button type="button" className="btn btn-outline-primary" onClick={handleSearch}>
                    {isLoading ? "Searching..." : "Search"}
                </button>
            </div>
            <div className="mt-5">
                {!searchResult.post ? "Not found" : <PostItem data={searchResult} />}
            </div>
        </div>
    );
}