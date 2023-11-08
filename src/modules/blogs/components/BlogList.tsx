import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { IPost } from "@/modules/blogs";

export interface IBlogList {
  className?: string;
  blogs: Array<IPost>;
}

const BlogList = ({ className = "", blogs }: IBlogList) => {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState<string>("");

  return (
    <div className={`${className}`}>
      {blogs.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.author}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
