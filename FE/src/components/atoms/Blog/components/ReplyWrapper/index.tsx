import { Reply } from "..";

import { Divider } from "@/components/atoms";

import { ReplyItem } from "@/models";

import "./styles.css";


interface ReplyWrapperProps {
  blogId: string;
  items: ReplyItem[];
}

export const ReplyWrapper = ({ items, blogId }: ReplyWrapperProps) => {
  const quantity = items?.length;
  return (
    <div>
      <a
        className="replyLink"
        data-toggle="collapse"
        data-target={`#collapse${blogId}`}
        aria-expanded="false"
        aria-controls={`collapse${blogId}`}
      >{`${quantity} replies`}</a>

      <div className="mt-1">
        <Divider />
      </div>

      <div className="collapse" id={`collapse${blogId}`}>
        {items.map((item) => (
          <Reply
            key={item.id}
            content={item.content}
            createdAt={item.createdAt}
            id={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};
