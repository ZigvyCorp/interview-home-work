import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import useDebounce from "../../hooks/useDebound";
import { changeSearch, startLoadPosts } from "../../reducers/postReducer";

const PostSearch = ({ ...other }) => {
	const dispatch = useDispatch();
	const { search } = useSelector((state) => state.posts);

	const [searchVal, setSearchVal] = useState(search || "");
	const debouncedValue = useDebounce(searchVal, 500);

	useEffect(() => {
		if (search !== debouncedValue) {
			dispatch(changeSearch(debouncedValue));
			dispatch(startLoadPosts());
		}
	}, [search, debouncedValue, dispatch]);

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearchVal(e.target.value)
  };

	return (
		<Input
			value={searchVal}
			onChange={onSearchChange}
			placeholder="Search posts..."
			{...other}
		/>
	);
};

export default PostSearch;
