import { memo } from "react";

import { ColorTag } from "@/components";
import BlogItemAuthor from "./blog-item-author.component";
import BlogItemComments from "./blog-item-comments.component";
import BlogItemSummary from "./blog-item-summary";
import { IBlog } from "@/models";

type Props = {
  blog: IBlog;
};

const defaultColorPallete = [
  {
    text: "magenta",
    color: "#FF00FF",
  },
  {
    text: "red",
    color: "#FF0000",
  },
  {
    text: "volcano",
    color: "#FF4500",
  },
  {
    text: "orange",
    color: "#FFA500",
  },
  {
    text: "gold",
    color: "#FFD700",
  },
  {
    text: "lime",
    color: "#00FF00",
  },
  {
    text: "green",
    color: "#008000",
  },
  {
    text: "cyan",
    color: "#00FFFF",
  },
  {
    text: "blue",
    color: "#0000FF",
  },
  {
    text: "greekblue",
    color: "#0066CC",
  },
  {
    text: "purple",
    color: "#800080",
  },
];

function BlogItem({ blog }: Props) {
  console.log(blog);
  return (
    <li className='px-8 py-12 border-b-4 border-b-black'>
      <h2 className='text-center text-3xl font-semibold mb-4'>{blog!.title}</h2>
      <div className='flex justify-between'>
        <BlogItemAuthor author={blog!.user} />
        <div className='flex flex-wrap w-[30%] gap-2 mb-8'>
          {defaultColorPallete.map(({ color, text }) => (
            <ColorTag key={text} text={text} color={color} />
          ))}
        </div>
      </div>
      {/* <BlogItemSummary summary={blog!.body} /> */}
      <BlogItemComments data={blog!.comments} />
    </li>
  );
}

export default memo(BlogItem);
