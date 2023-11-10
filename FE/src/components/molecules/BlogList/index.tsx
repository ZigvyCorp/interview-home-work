import { BlogItem } from "@/models";
import { Blog } from "../../atoms/Blog";
import { useState } from "react";
import { Pagination } from "@/components/atoms/Pagination";

interface BlogListProps {
  items: BlogItem[];
}

export const BlogList = ({ items }: BlogListProps) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageNumber = (paramPageNumber: number) => {
    setPageNumber(paramPageNumber);
  };

  return (
    <div>
      {items
        .filter(
          (_, index) =>
            index + 1 <= pageNumber * 5 && index + 1 > (pageNumber - 1) * 5
        )
        .map((item) => (
          <Blog
            key={item.id}
            author={item.author}
            content={item.content}
            createdAt={item.createdAt}
            id={item.id}
            replyList={item.replyList}
            tagList={item.tagList}
            title={item.title}
          />
        ))}
      <Pagination
        listSize={items.length || 0}
        currentPage={pageNumber}
        onChangePage={handlePageNumber}
        pageSize={5}
      />
    </div>
  );
};
