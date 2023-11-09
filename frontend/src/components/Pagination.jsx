// eslint-disable-next-line react/prop-types
export default function Pagination({ currentPage, totalPage, onPageChange }) {
    const pageNumbers = Array.from(
        { length: totalPage },
        (_, index) => index + 1
    );
    return (
        <nav>
            <div className="pagination d-flex flex-row mb-3 ms-3 gap-3">
                <button
                    disabled={currentPage === 1}
                    className="btn page-item border border-secondary rounded"
                    onClick={() => onPageChange(currentPage - 1)}
                >
                    Previous
                </button>
                {pageNumbers.map((pageNumber, index) => (
                    <button
                        key={index}
                        className="btn page-item border border-secondary rounded"
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button
                    disabled={currentPage == totalPage}
                    className="btn page-item border border-secondary rounded"
                    onClick={() => onPageChange(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </nav>
    );
}
