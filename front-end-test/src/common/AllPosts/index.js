import React, { useState } from 'react';
import ReactPaginate from 'react-paginate'
import HomePost from './HomePost';
import './styles.css'

const POST_PER_PAGE = 10


const AllPosts = (props) => {
    const [currentPage, setCurrentPage] = useState(0)
    const totalPage = Math.ceil(props.posts.length / POST_PER_PAGE)

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage)
    }
    
    const currentPageData = (offset) => {
        return props.posts.slice(offset, offset + POST_PER_PAGE)
            .map(post => {
                return (
                    <HomePost key={post.id} post={post}/>
                )
            })
    }
    
    

    return (
        <div className="AllPosts">
            <div>
                {currentPageData(currentPage * POST_PER_PAGE)}
            </div>

            <ReactPaginate
                previousLabel={<i className="fas fa-chevron-circle-left"></i>}
                nextLabel={<i className="fas fa-chevron-circle-right"></i>}
                breakClassName={'break-me'}
                pageCount={totalPage}
                marginPagesDisplayed={2}    // pages dispayed at start and end
                pageRangeDisplayed={2}      // pages displayed at start
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    );
}

export default AllPosts;