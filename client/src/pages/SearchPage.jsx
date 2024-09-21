import { useParams } from 'react-router-dom';
import InpageNavigation from '../components/InpageNavigation';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import PageAnimation from '../common/PageAnimation';
import BlogPostCard from '../components/BlogPostCard';
import NoDataMessage from '../components/NoDataMessage';
import LoadMoreDataBtn from '../components/LoadMoreDataBtn';
import axios from 'axios';
import { filterPaginationData } from '../common/filter-pagination-data';

const SearchPage = () => {
  let { query } = useParams();
  let [blogs, setBlog] = useState(null);

  const searchBlogs = ({ page = 1, create_new_arr = false }) => {
    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + '/search-blogs', {
        query,
        page,
      })
      .then(async ({ data }) => {
        let formatedData = await filterPaginationData({
          state: blogs,
          data: data.blogs,
          page,
          countRoute: '/search-blogs-count',
          data_to_send: { query },
          create_new_arr,
        });

        setBlog(formatedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    resetState();
    searchBlogs({ page: 1, create_new_arr: true });
  }, [query]);

  const resetState = () => {
    setBlog(null);
  };

  return (
    <section className="h-cover flex justify-center gap-10">
      <div className="w-full">
        <InpageNavigation
          routes={[
            `Search Results from "${query}"`,
            'Accounts Matched',
          ]}
          defaultHidden={['Accounts Matched']}
        >
          <>
            {blogs == null ? (
              <Loader />
            ) : blogs.results.length ? (
              blogs.results.map((blog, i) => {
                return (
                  <PageAnimation
                    transition={{
                      duration: 1,
                      delay: i * 0.1,
                    }}
                    key={i}
                  >
                    <BlogPostCard
                      content={blog}
                      author={blog.author.personal_info}
                    />
                  </PageAnimation>
                );
              })
            ) : (
              <NoDataMessage message="No blogs published" />
            )}
            <LoadMoreDataBtn
              state={blogs}
              fetchDataFun={searchBlogs}
            />
          </>
        </InpageNavigation>
      </div>

      <div className="min-w-[40%] lg:min-w-[350px] max-w-min border-l border-grey pl-8 pt-3 max-md:hidden">
        <h1 className="font-medium text-xl mb-8">
          User related to search{' '}
          <i className="fi fi-rr-user mt-1"></i>
        </h1>
      </div>
    </section>
  );
};

export default SearchPage;
