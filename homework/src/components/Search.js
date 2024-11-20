import React from 'react';

const Search = ({ search, inputSearch }) => {

    const handleOnchange = e => {
        let { value } = e.target;
        search(value)
    }

    return (
        <section className='search text-center my-4'>
            <input type="text" placeholder='Search' style={{ width: 400 }} name="search" value={inputSearch} onChange={handleOnchange} />
        </section>
    );
}

export default Search;
