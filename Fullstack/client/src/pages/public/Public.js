import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Breadcums, Footer, Loading } from "components";
import Header from "components/Header/Header";

const Public = () => {
  const [valueSearch, setValueSearch] = useState("");


  return (
    <div className="w-full flex flex-col items-center my-0 mx-auto">
      <Header valueSearch={valueSearch} setValueSearch={setValueSearch} />
      <div className="w-main mt-[100px] min-h-[78vh]">
        {/* <Breadcums /> */}

        <Outlet context={[valueSearch]} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Public;
