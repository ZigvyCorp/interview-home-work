import React from 'react';
import type { IPostSlice } from '../../redux/home/slice';
import { Card } from 'primereact/card';
import { Accordion, AccordionTab } from 'primereact/accordion';
import CommentItem from '../Comment/CommentItem';
import { Badge } from 'primereact/badge';
import { Link } from 'react-router-dom';

interface IPostProps extends IPostSlice {}

const PostItem: React.FC<IPostProps> = ({
  user,
  title,
  body,
  comments,
  id,
}): JSX.Element => {
  const header = (
    <div className="flex flex-column">
      <Link to={`/post/${id}`} className="no-underline">
        <h3 className="text-center">{title}</h3>
      </Link>

      <div className="flex justify-content-centers px-3 pt-3">
        <div className="flex flex-column ml-2">
          <p className="m-0">Author: {user?.name}</p>
          <p className="m-0">
            Created at:{' '}
            {new Date(user?.timestamp?.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <Card className="w-full" header={header}>
      <p className="m-0 mb-4">{body}</p>
      <Accordion>
        <AccordionTab
          header={
            <span className="flex align-items-center gap-2 w-full">
              <span className="font-bold white-space-nowrap">Comments</span>
              <Badge value={comments?.length} className="ml-auto" />
            </span>
          }
        >
          {comments?.map((comment) => (
            <div key={`comment-${comment.id}`} className="mb-2">
              <CommentItem {...comment} />
            </div>
          ))}
          {comments?.length === 0 && (
            <h1 className="text-center">No comment!</h1>
          )}
        </AccordionTab>
      </Accordion>
    </Card>
  );
};

export default PostItem;
