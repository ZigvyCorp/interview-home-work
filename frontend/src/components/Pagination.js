import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Pagination = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const totalPage = useSelector((state) => state.dataPosts.totalPages);

  const searchParams = new URLSearchParams(location.search);
  const pageCurrent = searchParams.get("page") || 1;

  // handle button previous page
  const handlePrePage = () => {
    if (pageCurrent > 1) {
      navigate(`/?page=${pageCurrent * 1 - 1}`);
    }
  };

  // handle button next page
  const handleNextPage = () => {
    if (pageCurrent < totalPage) {
      navigate(`/?page=${pageCurrent * 1 + 1}`);
    }
  };
  return (
    <div className="d-flex justify-content-center ">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              onClick={handlePrePage}
              className="page-link"
              aria-label="Previous"
            >
              <span aria-hidden="true">«</span>
            </button>
          </li>

          {Array.from({ length: totalPage }, (_, index) => index + 1).map(
            (page) => (
              <li className="page-item">
                <a
                  style={{
                    color: pageCurrent == page ? "#6096B4" : "black",
                    fontWeight: pageCurrent == page ? "bold" : "",
                  }}
                  className="page-link"
                  href={`/?page=${page}`}
                >
                  {page}
                </a>
              </li>
            )
          )}

          <li className="page-item">
            <button
              onClick={handleNextPage}
              className="page-link"
              aria-label="Next"
            >
              <span aria-hidden="true">»</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
