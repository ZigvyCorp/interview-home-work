import { useState } from "react";

import { Card } from "@/components/common";

import { IComment } from "@/modules/blogs";

export interface IBlogCard {
  className?: string;
  id: number;
  title: string;
  content: string;
  comment: Array<IComment>;
  created: string;
  author: string;
}

const BlogCard = (props: IBlogCard) => {
  const [active, setActive] = useState<boolean>(false);

  const handleComment = () => {
    setActive(!active);
  };

  return <Card active={active} handleComments={handleComment} {...props} />;
};

export default BlogCard;
