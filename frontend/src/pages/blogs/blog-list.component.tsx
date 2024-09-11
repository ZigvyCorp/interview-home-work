import InfiniteScroll from "react-infinite-scroll-component";

import { BlogItem } from "./blog-item";
import useBlogs from "./blogs.hook";

function BlogList() {
  const { searchTerm, data, error, fetchNextPage, isPending } = useBlogs();
  if (isPending) return <p className='text-lg'>Loading....</p>;

  if (error) return <p>{error.message}</p>;

  // if there are search terms but no data is return
  if (searchTerm && !data.pages[0]?.data.length) {
    return <p>No posts found with that keyword</p>;
  }

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
