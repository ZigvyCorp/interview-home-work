import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export const Pagination = () => {
    const postsPerPage = useSelector(state => state.postsPerPage);
    const {num} = useParams();

    let currentPage = null;
    if(num) {
        currentPage = parseInt(num);
    }
    else {
        currentPage = 1;
    }

    const searchPosts = useSelector(state => state.searchPosts);
    const totalPost = searchPosts.length;
    const pageNumber = [];


    for(let i = 1;  i <= Math.ceil(totalPost / postsPerPage); i++) {
        pageNumber.push(i);
    }
    // const next = currentPage + 1;
    // console.log(typeof(currentPage));
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage <= 1 && "disabled"}`}>
                    <Link to={`/page/${currentPage-1}`} className="page-link" 
                    tabIndex="-1" aria-disabled="true"
                    >Previous</Link>
                </li>
                {
                    pageNumber.map((number, index) => {
                        return <li key={index} 
                                className={`page-item ${index===currentPage-1 && "active"}`}>
                                    <Link to={`/page/${number}`} className="page-link">{number}</Link>
                                </li>;
                    })
                }
                <li className={`page-item ${currentPage >= pageNumber.length && "disabled"}`}>
                    <Link to={`/page/${currentPage+1}`} className="page-link" 
                    tabIndex="-1" aria-disabled="true"
                    >Next</Link>
                </li>
            </ul>
        </nav>
    );
}