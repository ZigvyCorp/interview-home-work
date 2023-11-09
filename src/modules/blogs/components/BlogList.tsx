import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Container } from "@/components/common";
import { Pagination } from "@/components/pagination";

import { IPost, PAGINATION } from "@/modules/blogs";

export interface IBlogList {
  className?: string;
  blogs: Array<IPost>;
}

const BlogList = ({ className = "", blogs }: IBlogList) => {
  // const limit = 30;
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState<string>("");
  const [pagination, setPagination] = useState(PAGINATION);

  useEffect(() => {
    if (params.get("page") !== null && typeof parseInt(params.get("page") as string) === "number") {
      setPagination({
        ...pagination,
        page: parseInt(params.get("page") as string),
      });
    }
  }, []);

  const getPaginatedData = () => {
    const start = pagination.page * pagination.pageSize - pagination.pageSize;
    const end = start + pagination.pageSize;
    return blogs.slice(start, end);
  };

  const listData = useMemo(() => getPaginatedData(), [pagination.page, pagination.pageSize]);

  // -- handling ----

  // const getPaginatedData = () => {
  //   const start = pagination.page * pagination.pageSize - pagination.pageSize;
  //   const end = start + pagination.pageSize;
  //   return blogs.slice(start, end);
  // };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handlePage = (page: number) => {
    setPagination({
      ...pagination,
      page,
    });
    setParams({
      ...params,
      page: `${page}`,
    });
  };

  return (
    <div className={`${className}`}>
      <Container>
        {listData.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.title}</h2>
            </div>
          );
        })}

        <div className="pt-[30px]">
          {listData.length > 0 && (
            <Pagination
              page={pagination.page}
              total={blogs.length}
              pageSize={pagination.pageSize}
              onChange={handlePage}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default BlogList;
