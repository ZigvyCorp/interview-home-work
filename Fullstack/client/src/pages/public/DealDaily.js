// import React, { useEffect, useState } from "react";
// import { ProductSlide } from "../../components";
// import { productService } from "../../services/productService";

// const DealDaily = () => {
//   const [products, setProducts] = useState(null);

//   const fechProducts = async () => {
//     const response = await productService.handleGetAllProducts();
//     setProducts(response.products);
//   };

//   useEffect(() => {
//     fechProducts();
//   }, []);
//   return (
//     <section className="mt-5 bg-feature p-5 rounded-xl">
//       <h1 className="text-3xl font-semibold text-feature">DEAL SỐC</h1>
//       <ProductSlide dataSlider={products} normal={true} />
//     </section>
//   );
// };

// export default DealDaily;
