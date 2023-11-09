import React, { useState } from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getListPostActionRequest } from '../../redux/actions/postActions';
const MyPagination = ({ current, total }) => {
    const dispatch = useDispatch();
    const [current1, setCurrent1] = useState(current);
    const onChange = (page) => {
        // setCurrent1(page);
        dispatch(getListPostActionRequest({ pageNumber: page, pageSize: 10 }));
    };
    return <Pagination current={current1} defaultCurrent={1} onChange={onChange} total={total} />;
};
export default MyPagination;
