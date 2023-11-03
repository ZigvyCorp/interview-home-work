import { Button, Skeleton } from 'antd';
import { useCallback, useEffect, useRef, useState } from 'react';
import LineBreak from '../../LineBreak';
import SingleComment from './SingleComment';
import { executeGetWithPagination } from '../../../utils/APIUtil';
import { PaginationResponse } from '../../../interfaces/response/PaginationResponse';
import { CommentResponse } from '../../../interfaces/response/CommentResponse';

interface AllCommentsProps {
  postId: number;
}

const PAGE_SIZE = 10;
const AllComments: React.FC<AllCommentsProps> = (props) => {

  const { postId } = props;

  const divRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState<CommentResponse[]>([]);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    const divElement = divRef.current;
    const handleScroll = () => {
      if (divElement) {
        const isAtBottom = divElement.scrollTop + divElement.clientHeight >= divElement.scrollHeight;
        if (isAtBottom && pageIndex < totalPage) {
          setPageIndex(pageIndex + 1);
        }
      }
    };

    if (divElement) {
      divElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (divElement) {
        divElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pageIndex, totalPage]);

  const fetchData = useCallback(async () => {
    try {
      const { data }: { data: PaginationResponse<CommentResponse> } =
        await executeGetWithPagination('/comment', { page: pageIndex, pageSize: PAGE_SIZE }, { postId })
        
      setComments(prev => [...prev, ...data.rows]);
      setTotalPage(data.totalPage);
      setPageIndex(pageIndex);
    }
    catch (error) {
      throw new Error((error as Error).message);
    } finally {
      setIsLoading(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  useEffect(() => {
    fetchData();
  }, [fetchData, pageIndex])

  return (
    <>
      <LineBreak className='mb-6' />
      {isLoading
        ? <Skeleton avatar paragraph={{ rows: 4 }} />
        : <div className='max-h-[250px] overflow-y-auto' ref={divRef}>
          {comments.map((comment, index) => <SingleComment key={index} index={index} data={comment} size={comments.length} />)}
        </div>}
    </>
  )
}

export default AllComments