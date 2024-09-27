import React, { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  pageChange,
  previousPage,
} from "../../redux/action/paginationAction";
import { loading } from "../../redux/action/loadingAction";

export const Pagination = () => {
  const pageInfo = useSelector((state: {pages: PageInfo}) => state.pages);
  const totalPages = useSelector((state: PageInfo) => state.totalPages);
  const dispatch = useDispatch();

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination d-flex justify-content-center">
        <li className={`page-item ${pageInfo.pageNumber === 1 ? "disabled" : undefined}`}>
          <button
            className="page-link"
            aria-label="Previous"
            disabled={pageInfo.pageNumber === 1}
            onClick={() => {
              dispatch(previousPage());
              dispatch(loading());
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {Array.from(Array(totalPages)).map((item, index) => (
          <li
            key={index}
            className={`page-item ${
              index + 1 == pageInfo.pageNumber ? "active" : undefined
            }`}
          >
            <button
              onClick={() => {
                dispatch(pageChange(index + 1));
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
            pageInfo.pageNumber === totalPages ? "disabled" : undefined
          }`}
        >
          <button
            className="page-link"
            disabled={totalPages === pageInfo.pageNumber}
            onClick={() => {
              dispatch(nextPage());
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
