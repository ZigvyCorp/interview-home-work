import { useState } from "react";
const SearchInput = (props) => {
  const posts = props.posts;
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="searchInput">
      <strong>Search blog by title</strong>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <hr />
      {posts && posts.filter((Post) => {
            if (searchTerm === "") {
              return Post;
            } else if (
              Post.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return Post;
            }
          })}
    </div>
  );
};

export default SearchInput;
