import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { format, parseISO } from "date-fns";

import { DATE_FORMAT } from "@/shared";

import { Container } from "@/components/common";
import { Pagination } from "@/components/pagination";
import { BlogCard } from "@/modules/blogs";

import { IPost, PAGINATION } from "@/modules/blogs";

export interface IBlogList {
  className?: string;
  blogs: Array<IPost>;
}

const BlogList = ({ className = "", blogs }: IBlogList) => {
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
        <div className="pt-[30px] lg:pt-[60px]">
          <div className="flex flex-wrap -m-[18px]">
            {listData.map((item, index) => {
              return (
                <div key={index} className="p-[18px] w-full md:w-1/2 lg:w-1/3">
                  <BlogCard
                    className="w-full"
                    id={item.id}
                    author={item.author || ""}
                    created={format(parseISO(item.createdDate), DATE_FORMAT.DAY_MONTH_YEAR) || ""}
                    title={item.title}
                    content={item.body.substring(0, 100)}
                    comment={item.comments || []}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="py-[30px]">
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
