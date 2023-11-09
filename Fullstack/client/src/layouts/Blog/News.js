import React, { memo } from "react";

import NewsItem from "./NewsItem";
import { Loading, PaginationComponent } from "components";
import { useSelector } from "react-redux";

const News = () => {


  const { posts, isLoading } = useSelector((state) => state.postSlice);

  return (
    <Loading isLoading={isLoading}>
      <div className="col-span-4 grid grid-cols-3 gap-5">
        {posts.response.map(el => {
          return <NewsItem key={el._id} data={el} />
        })

        }


      </div>
    </Loading>
  );
};

export default memo(News);
