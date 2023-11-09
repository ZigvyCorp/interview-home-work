import { useMemo } from "react";
import { useParams } from "react-router";
import { format, parseISO } from "date-fns";
import { DATE_FORMAT, useAppSelector } from "@/shared";

import { Container } from "@/components/common";

import { IPost, selectBlog } from "@/modules/blogs";

const BlogDetailPage = () => {
  const params = useParams();
  const { posts } = useAppSelector(selectBlog);

  const detail: IPost = useMemo(() => {
    const result = (posts as Array<any>).find((item) => item.id === parseInt(params.id!)) || undefined;

    return result;
  }, [posts]);

  return (
    <div className="py-[30px] lg:py-[60px]">
      <Container>
        <div className="wrapper px-[22px] max-w-[900px] mx-auto">
          {detail ? (
            <div className="space-y-[20px] md:space-y-[24px] lg:space-y-[30px]">
              <h1 className="font-bold text-[2.2rem] md:text-[2.6rem] lg:text-[3rem] capitalize">{detail.title}</h1>
              <div className="space-y-[4px]">
                <p className="capitalize text-[1rem] md:text-[1.4rem] lg:text-[1.6rem] font-semibold opacity-80">
                  {detail.author || ""}
                </p>
                <p className="capitalize text-[.8rem] md:text-[1rem] lg:text-[1.2rem] opacity-70">
                  {format(parseISO(detail.createdDate), DATE_FORMAT.DAY_MONTH_YEAR) || ""}
                </p>
              </div>

              <div className="w-full h-[400px] bg-yellow rounded-md"></div>

              <p>{detail.body}</p>
            </div>
          ) : (
            <>
              <h1 className="font-bold text-[2.2rem] md:text-[2.6rem] lg:text-[3rem] capitalize">No Data</h1>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default BlogDetailPage;
