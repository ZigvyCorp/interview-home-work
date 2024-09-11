import InfiniteScroll from "react-infinite-scroll-component";

import { BlogItem } from "./blog-item";
import useBlogs from "./blogs.hook";

function BlogList() {
  const { data, error, status, fetchNextPage, refetch } = useBlogs();
  if (status === "pending") return <p className='text-lg'>Loading....</p>;
  if (error) return <p>{error.message}</p>;

  // const handleFetchNextPage = () => {
  //   if (data?.pages.some((page) => page?.data.length === 0)) {
  //     refetch();
  //   } else {
  //     fetchNextPage();
  //   }
  // };
  return (
    <ul>
      {data?.pages.map((page) => {
        return (
          <InfiniteScroll
            key={page?.currentPage}
            dataLength={page?.postCount || 0}
            next={() => fetchNextPage()}
            hasMore={!!page?.nextPage}
            loader={<p className='text-2xl'>Loading....</p>}
          >
            {page?.data.map((item) => (
              <BlogItem key={item?.id} blog={item!} />
            ))}
          </InfiniteScroll>
        );
      })}
    </ul>
  );
}

export default BlogList;
