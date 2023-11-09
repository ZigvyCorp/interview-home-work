import React, { memo } from "react";
import Avatar from "assets/img/avatar.png";
import { formatCreatedAt } from "utils/helpers";
import { Link } from "react-router-dom";

const NewsItem = ({ data }) => {
  return (
    <Link
      to={`blog/${data?._id}`}
      className="bg-sub px-3 py-5 rounded-lg  shadow-lg "
    >
      <div>
        <img
          className="w-full h-[300px] object-cover"
          src={data?.image}
          alt=""
        />
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex items-center gap-3  ">
          <img
            className="w-[50px] shadow-md rounded-full"
            src={data?.author?.image ? `${data?.author?.image}` : Avatar}
            alt=""
          />
          <div className="text-sm relative">
            <h3 className="font-semibold  relative group">
              {data?.author?.firstName + "" + data?.author?.lastName}
            </h3>
            <span className="text-[12px] italic text-sub">
              {formatCreatedAt(data?.createdAt)}
            </span>
          </div>
        </div>
      </div>
      <div>
        {data?.title?.length < 50 ? (
          <h1 className="my-3 text-xl font-semibold">{data?.title}</h1>
        ) : (
          <h1 className="my-3 text-xl font-semibold">
            {data?.title.substring(0, 50)}...
          </h1>
        )}

        {data?.content?.length < 100 ? (
          <p className="my-3 ">{data?.content}</p>
        ) : (
          <div className="my-3 w-full">
            {data?.content.substring(0, 100)}...
          </div>
        )}
      </div>

      {/* <div className="border-t-2 pt-5">
        <Interact currentNews={data} />
      </div> */}


    </Link>
  );
};

export default memo(NewsItem);
