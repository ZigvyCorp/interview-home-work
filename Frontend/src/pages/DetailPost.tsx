import React, { useEffect, useMemo } from 'react';
import Header from '../layout/Header';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { postActions } from '../redux/post/postSlice';
import CommentItem from '../components/Comment/CommentItem';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Badge } from 'primereact/badge';

function DetailPost(): JSX.Element {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const { data } = useAppSelector((state) => state.post);

  const post = useMemo(
    () =>
      data?.find((item) => item.id === (id != null ? parseInt(id, 10) : 0)) ??
      null,
    [data],
  );

  const getData = (): void => {
    if (id != null) {
      dispatch(postActions.getPost({ id }));
    }
  };

  useEffect(() => {
    if (post == null) {
      getData();
    }
  }, [post]);

  return (
    <Header>
      <div
        style={{ paddingTop: '6.5rem' }}
        className="mx-8 px-4 pb-4 border-right-1 border-left-1 border-gray-300"
      >
        <h1 className="text-center">{post?.title}</h1>
        <p>{post?.body}</p>
        <Accordion activeIndex={0}>
          <AccordionTab
            header={
              <span className="flex align-items-center gap-2 w-full">
                <span className="font-bold white-space-nowrap">Comments</span>
                <Badge value={post?.comments?.length} className="ml-auto" />
              </span>
            }
          >
            {post?.comments?.map((comment) => (
              <div key={`comment-${comment.id}`} className="mb-2">
                <CommentItem {...comment} />
              </div>
            ))}
            {post?.comments?.length === 0 && (
              <h1 className="text-center">No comment!</h1>
            )}
          </AccordionTab>
        </Accordion>
      </div>
    </Header>
  );
}

export default DetailPost;
