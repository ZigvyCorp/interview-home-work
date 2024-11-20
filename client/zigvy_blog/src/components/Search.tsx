import { ChangeEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SEARCH_POST_API } from "../setup/constants";
import debounce from "lodash/debounce";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const dispatch = useDispatch();

  // Define a debounced search function
  const debouncedSearch = debounce((term: string) => {
    dispatch({
      type: SEARCH_POST_API,
      payload: term,
    });
  }, 1000);

  useEffect(() => {
    if (searchTerm !== null) {
      debouncedSearch(searchTerm);
    }
  }, [searchTerm]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="d-flex form-outline mb-4 mt-3" data-mdb-input-init>
      <input
        type="search"
        className="form-control"
        placeholder="Search post..."
        value={searchTerm ? searchTerm : ""}
        onChange={handleChange}
      />
    </div>
  );
}
