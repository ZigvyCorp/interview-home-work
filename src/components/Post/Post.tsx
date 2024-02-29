import { PAGE_SECTION } from "@/common/enum/routes.enum";
import getContentSummary from "@/common/utils/getContentSummary";
import { Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export interface IPostProps {
  id: string;
  author: string | undefined;
  createdAt: string;
  title: string;
  body: string;
}

const Post = (props: IPostProps) => {
  return (
    <Link to={`/${PAGE_SECTION.POST}/${props.id}`}>
      <Tooltip title="Bấm vào để xem chi tiết!">
        <div className="post shadow p-3 mb-5 bg-white rounded">
          <div className="post__content">
            <div className="post_content-heading column-gap-2">
              <p className="mb-1 fw-bold">{props.author}</p>
              <p>{props.createdAt}</p>
            </div>
            <div className="post_content-body">
              <h3>{props.title}</h3>
              <p>{getContentSummary(props.body)}</p>
            </div>
          </div>
        </div>
      </Tooltip>
    </Link>
  );
};

export default React.memo(Post);
