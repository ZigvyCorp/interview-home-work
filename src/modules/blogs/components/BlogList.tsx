import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { IPost } from "@/modules/blogs";
import { Pagination } from "@/components/pagination";

export interface IBlogList {
  className?: string;
  blogs: Array<IPost>;
}

const BlogList = ({ className = "", blogs }: IBlogList) => {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState<string>("");
  const [pagination, setPagination] = useState();

  return (
    <div className={`${className}`}>
      {blogs.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.title}</h2>
          </div>
        );
      })}

      <div className="pt-[30px]">
        <Pagination total={blogs.length} pageSize={30} onChange={() => {}} />
      </div>
    </div>
  );
};

export default BlogList;
