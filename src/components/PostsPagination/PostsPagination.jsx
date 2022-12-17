import { Pagination } from 'react-bootstrap';
import { useEffect, useMemo } from 'react';

const PostsPagination = ({ totalPage, active = 1, onChangePage }) => {
  const items = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === active}
          onClick={() => onChangePage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pages;
  }, [active]);
  return <Pagination>{items}</Pagination>;
};

export default PostsPagination;
