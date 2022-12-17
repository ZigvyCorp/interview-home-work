import React, { useState } from 'react';


const Pagination = ({ totalPage, paginate }) => {
    const pageList = [];
    const [activePage, setActivePage] = useState(1);
    const handlePaginate = (index) => {
        setActivePage(index);
        paginate(index)
    }
   

    for (let i = 1; i <= Math.ceil(totalPage); i++) {
        pageList.push(i);
    }
    return (
        <div className='d-flex justify-content-center'>
            <nav className='mt-5' aria-label="...">
                <ul className="pagination">
                    {pageList.map((number) => {
                        console.log('number',number)
                        return <li key={number} className={`page-item  ${(activePage === number) ? 'active' : ''} `}><button className="page-link" onClick={()=>{handlePaginate(number)}}>{number}</button></li>

                    })
                    }
                </ul>
            </nav>
        </div>



    );
};

export default Pagination;