import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageChanged } from "../redux/action/paginationAction";
import { loading } from "../redux/action/loadingAction";

export const Pagination = () => {
  const pageInfo = useSelector((state: { pages: PageInfo }) => state.pages);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(pageInfo.pageNumber);
  }, [pageInfo]);
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination d-flex justify-content-center m-3">
        {Array.from(Array(pageInfo.totalPages)).map((_, index) => (
          <li
            key={index}
            className={`page-item ${
              index == pageInfo.pageNumber ? "active" : undefined
            }`}
          >
            <button
              onClick={() => {
                dispatch(loading());
                dispatch(pageChanged(index + 1));
              }}
              className="page-link"
              disabled={
                // index + 1 === pageInfo.pageNumber ||
                index == pageInfo.pageNumber
              }
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
