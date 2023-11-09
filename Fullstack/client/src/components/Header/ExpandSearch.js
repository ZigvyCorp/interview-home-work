import React from 'react'
import { Link } from 'react-router-dom';
import { icons } from 'utils/icons';

const ExpandSearch = ({ data }) => {
    const { FaSearch } = icons;

    return (
        <div className="bg-sub w-full py-2 absolute top-[37px] left-0 rounded-lg shadow-md">
            {data?.length > 0 ? data?.map((el) => (<Link key={el?._id} to={`/${el?.category?.toLowerCase()}/${el?._id}/${el?.title
                }`} className='flex items-center px-3 py-2 hover:bg-main'>
                <FaSearch className='opacity-50 mr-3' />
                <p>{el?.title}</p>
            </Link>)) : <div className="text-center text-sm text-sub">
                Ops..Not found product!
            </div>}
        </div>
    )
}

export default ExpandSearch