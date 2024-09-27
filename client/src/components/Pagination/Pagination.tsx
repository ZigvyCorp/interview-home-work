import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  pageChange,
  previousPage,
} from "../../redux/action/paginationAction";
import { loading } from "../../redux/action/loadingAction";

export const Pagination = () => {
  const pageInfo = useSelector((state: { pages: PageInfo }) => state.pages);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(pageInfo);
  }, [pageInfo]);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination d-flex justify-content-center">
        <li
          className={`page-item ${
            pageInfo.pageNumber === 1 ? "disabled" : undefined
          }`}
        >
          <button
            className="page-link"
            aria-label="Previous"
            disabled={pageInfo.pageNumber === 1}
            onClick={() => {
              dispatch(previousPage(pageInfo));
              dispatch(loading());
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {Array.from(Array(pageInfo.totalPages)).map((_, index) => (
          <li
            key={index}
            className={`page-item ${
              index + 1 == pageInfo.pageNumber ? "active" : undefined
            }`}
          >
            <button
              onClick={() => {
                dispatch(pageChange(index + 1, pageInfo));
                dispatch(loading());
              }}
              className="page-link"
              disabled={index + 1 === pageInfo.pageNumber}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            pageInfo.pageNumber === pageInfo.totalPages ? "disabled" : undefined
          }`}
        >
          <button
            className="page-link"
            disabled={pageInfo.totalPages === pageInfo.pageNumber}
            onClick={() => {
              dispatch(nextPage(pageInfo));
              dispatch(loading());
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
