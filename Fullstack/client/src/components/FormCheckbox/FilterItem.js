import { FormCheckbox } from "components";
import React, { memo, useEffect, useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const FilterItem = ({ title, data, path, sort }) => {
  const [selected, setSelected] = useState({ color: [], brand: [] });
  // let queries = { sort }
  // const [queries, setQueries] = useState({ sort })



  const navigate = useNavigate();
  const [params] = useSearchParams();

  const handleSelected = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      title === "Color" && setSelected((prev) => ({ ...prev, color: [...prev.color, value] }));
      title === "Brand" && setSelected((prev) => ({ ...prev, brand: [...prev.brand, value] }));
    } else {
      title === "Color" && setSelected((prev) => ({ ...prev, color: [...prev.color.filter((el) => el !== value)] }));
      title === "Brand" && setSelected((prev) => ({ ...prev, brand: [...prev.brand.filter((el) => el !== value)] }));
    }
  };

  useEffect(() => {
    // const queries = {};

    // const param = [];

    // for (let i of params.entries()) param.push(i);


    // for (let i of param) queries[i[0]] = i[1];
    // if (title === "Color") queries.color = selected.color.join(",")
    // if (title === "Brand") queries.brand = selected.brand.join(",")
    // console.log('queries: ', queries);
    // navigate({
    //   path: path,
    //   search: createSearchParams(queries).toString(),
    // });
    if (selected.color?.length > 0 || selected.brand?.length > 0) {
      const param = [];

      for (let i of params.entries()) param.push(i);
      const queries = { sort };

      for (let i of param) queries[i[0]] = i[1];
      queries.brand = selected.brand.join(",")
      // queries.page = 1
      navigate({
        path: path,
        search: createSearchParams(queries).toString(),

      });
    } else {

      navigate({
        path: path,

      });
    }





  }, [selected.brand, navigate]);
  // useEffect(() => {
  //   if (selected.brand?.length > 0) {
  //     const param = [];

  //     for (let i of params.entries()) param.push(i);
  //     // const queries = {};

  //     for (let i of param) queries[i[0]] = i[1];
  //     queries.brand = selected.brand.join(",")
  //     // queries.page = 1
  //     navigate({
  //       path: path,
  //       search: createSearchParams(queries).toString(),

  //     });
  //   }
  //   console.log('queries: ', queries);





  // }, [selected.brand, navigate]);

  useEffect(() => {

  }, [])

  return (
    <div className="flex flex-col p-3 border-b-2 border-main">
      <h2>{title}</h2>
      <div className="grid grid-cols-2">
        <FormCheckbox data={data} onChange={handleSelected} />
      </div>
    </div>
  );
};

export default memo(FilterItem);
