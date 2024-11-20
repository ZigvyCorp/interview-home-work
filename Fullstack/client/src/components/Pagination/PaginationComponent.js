import React, { memo, useState } from 'react';
import { Pagination } from 'antd';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';

const PaginationComponent = ({ total, pageSize }) => {

  const [current, setCurrent] = useState(1);
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const { category } = useParams()

  const onChange = (page) => {
    setCurrent(page);
    const param = [];

    for (let i of params.entries()) param.push(i);
    const queries = {};

    for (let i of param) queries[i[0]] = i[1];
    queries.page = page
    navigate({
      path: `/products/${category}`,
      search: createSearchParams(queries).toString(),
    });
  };
  return <div className="mt-5 flex items-center justify-end">
    <Pagination hideOnSinglePage={true} pageSize={pageSize} current={current} onChange={onChange} total={total} />
  </div>;
}

export default memo(PaginationComponent)