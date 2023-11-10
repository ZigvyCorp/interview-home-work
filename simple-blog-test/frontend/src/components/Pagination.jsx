import { useSelector, useDispatch } from "react-redux";
import { nextPage, previousPage, changePage } from "../redux/postsSlice";

export default function Pagination({ dispatch }) {
    const { totalPages, currentPage } = useSelector(state => state.posts);
    //const dispatch = useDispatch();
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    // When user click next button
    const handleNext = () => {
        dispatch(nextPage());
    }

    // When user click previous button
    const handlePrevious = () => {
        dispatch(previousPage());
    }

    // When user click page number button
    const handleChangePage = (page) => {
        dispatch(changePage(page));
    }

    return (
        <nav className="mt-5 d-flex justify-content-center">
            <ul className="pagination">
                {/* PREVIOUS BUTTON */}
                <li
                    className={`page-item mx-2 ${currentPage === 1 && "disabled"}`}
                    onClick={handlePrevious}
                >
                    <button className="page-link">Previous</button>
                </li>

                {/* PAGES NUMBER */}
                {pages.map(page => (
                    <li
                        key={page}
                        className={`mx-2 page-item ${currentPage === page && "active"}`}
                        onClick={() => handleChangePage(page)}
                    >
                        <button className="page-link">{page}</button>
                    </li>
                ))}

                {/* NEXT BUTTON */}
                <li className="page-item" onClick={handleNext}>
                    <button className="page-link mx-2">Next</button>
                </li>
            </ul>
        </nav>
    );
}