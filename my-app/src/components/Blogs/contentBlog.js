import React, { useState } from "react";

export default function ContentBlog(props) {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="content-blog">
      {props.content.length >= 100 && seeMore === false ? (
        <p>
          {props.content.slice(0, 100) + "..."}
          <a onClick={() => setSeeMore(true)}>See More</a>
        </p>
      ) : (
        props.content
      )}
    </div>
  );
}
