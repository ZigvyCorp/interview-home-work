import React, { memo, useState } from "react";
import ProductItem from "./ProductItem";

const ListProduct = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {products?.map((product) => {
        return <ProductItem key={product._id} product={product} normal={true} />;
      })}
    </div>
  );
};

export default memo(ListProduct);
