import { useState, useEffect, useMemo } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Home/Home.module.scss";

const cx = classNames.bind(style);

function DividePage({ posts, itemsPerPage = 8, sendPage = () => {} }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const targetPage = (index) => {
    setCurrentPage(index + 1);
  };
  const totalPages = useMemo(() => {
    return Math.ceil(posts.length / itemsPerPage);
  }, [itemsPerPage, posts.length]);
  // Slice the posts array based on the current page and items per page
  const getPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedPosts = posts.slice(startIndex, endIndex);
    sendPage(paginatedPosts);
  };
  return (
    <>
      {totalPages >= 2 && (
        <div className={cx("divide-page")}>
          <button onClick={previousPage} disabled={currentPage === 1}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => targetPage(index)}
              className={index + 1 === currentPage ? cx("active") : ""}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </>
  );
}

export default DividePage;
