import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components";
import { IBlog } from "@/models";

type Props = {
  data: IBlog["comments"];
};
function CommentDetails({ data }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const commentLength = data?.length || 0;

  const handleToggleExpandState = () => setIsExpanded((prev) => !prev);

  return (
    <>
      <div className='border-b border-gray/60 pb-4 space-x-4 flex items-center'>
        <p>{commentLength} replies</p>
        {commentLength > 0 && (
          <button onClick={handleToggleExpandState} className='text-primary'>
            {isExpanded ? "Close" : "Open"} reply section
          </button>
        )}
      </div>
      {isExpanded && (
        <ul className='mt-6 space-y-4'>
          {data.map((d) => (
            <CommentDetailsData key={d.id} data={d} />
          ))}
        </ul>
      )}
    </>
  );
}

export default CommentDetails;

type CommentDetailsProps = {
  data: IBlog["comments"][number];
};

function CommentDetailsData({ data }: CommentDetailsProps) {
  return (
    <li className='flex gap-4'>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='flex flex-col gap-2'>
        <p>{data.user.name}</p>
        <p>{data.content}</p>
      </div>
    </li>
  );
}
