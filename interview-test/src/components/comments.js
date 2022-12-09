import Pagination from "./pagination.js";
import { useState } from "react";
import { useMemo } from 'react';
let PageSize = 10;

const Comments = (props) => {
  const comments = props.comments;
  const [currentPage, setCurrentPage] = useState(1);
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return comments && comments.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div className="comments">
      {currentData && currentData.map((Comment) => {
        return (
          <div className="comment" key={Comment.id}>
            <p className="comment-name">Name: {Comment.name}</p>
            <p className="pcomment-body">Reply: {Comment.body}</p>
            <hr />
          </div>    
        );
      })}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={comments && comments.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
    
  );
};

export default Comments;
