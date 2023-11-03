import { Divider } from 'antd';
import { useState } from 'react';
import CommentItem from './CommentItem';

export default function Comment() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setExpanded(true);
        }}
        className='font-mono cursor-pointer tracking-tighter text-xl'
      >
        2 replies
      </button>
      <Divider />
      {expanded && (
        <div>
          <CommentItem />
          <CommentItem />
        </div>
      )}
    </div>
  );
}
