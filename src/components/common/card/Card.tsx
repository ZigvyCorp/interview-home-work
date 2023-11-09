import { Link } from "react-router-dom";

import { IComment } from "@/modules/blogs";

export interface ICard {
  className?: string;
  id: number;
  title: string;
  content: string;
  active: boolean;
  comment: Array<IComment>;
  created: string;
  author: string;
  handleComments: () => void;
}

const Card = ({ className = "", title, content, comment, active, created, author, id, handleComments }: ICard) => {
  return (
    <div className={`${className} rounded-lg bg-light_bg p-[20px] group`}>
      <div className="img-wrapper w-full h-[200px] bg-yellow rounded-md">
        <img src="" alt="" />
      </div>
      <div className="content-wrapper py-[22px]">
        <div
          className="title relative cursor-pointer pb-[16px] before:content-[''] before:absolute before:w-full before:h-[1px] before:block before:bg-light_grey before:bottom-0
          after:content-[''] after:block after:absolute after:w-[75%] after:h-[1px] after:bottom-0 after:bg-white after:transition-transform after:duration-2000 after:ease-linear after:origin-left after:scale-0 group-hover:after:scale-100 
        "
        >
          <Link
            to={`/${id}`}
            className="line-clamp-1 text-[16px] md:text-[18px] lg:text-[20px] capitalize font-semibold"
          >
            {title}
          </Link>
        </div>
        <p className="pt-[16px]">{content}</p>
      </div>
      <div className="info-wrapper pb-[22px]">
        <div className="flex space-x-[8px]">
          <div className="rounded-full w-[30px] h-[30px] relative bg-yellow"></div>
          <div className="space-y-[4px]">
            <h4 className="text-[1rem] opacity-90 font-semibold">{author}</h4>
            <p className="text-[.7rem] text-grey opacity-80">{created}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to={`/${id}`} className="px-[16px] py-[6px] bg-yellow rounded-full text-bg font-bold">
            Read full article {">>"}
          </Link>
        </div>
      </div>
      <div className="comment">
        <div
          className={`relative pb-[16px] flex justify-between cursor-pointer transition-colors duration-100 ease-linear hover:text-white hover:opacity-100
          before:content-[''] before:absolute before:w-full before:h-[1px] before:block before:bg-light_grey before:bottom-0
          ${active ? "text-white font-semibold" : "text-grey opacity-70"}`}
          onClick={handleComments}
        >
          <h5>{comment.length} replies</h5>
          <h5 className="flex items-center">Show more {">>"}</h5>
        </div>
        <div className="pt-[16px]">
          <div
            className={`space-y-[16px] transition-all duration-200 ease-linear origin-top overflow-y-auto ${
              active ? "h-auto max-h-[25rem]" : "h-0 max-h-0"
            }`}
          >
            {comment.map((item, index) => {
              return (
                <div key={index} className="space-y-[6px]">
                  <div className="text-grey opacity-75 text-[1rem] line-clamp-1">User: {item.name}</div>
                  <p className="text-[1.2rem]">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
