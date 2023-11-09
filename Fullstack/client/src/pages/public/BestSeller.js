// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { ProductSlide } from "../../components";
// import { productService } from "../../services/productService";
// import { tabTitle } from "../../utils/constants";

// const BestSeller = () => {
//   const [bestSellers, setBestSellers] = useState(null);
//   const [newProducts, setNewProducts] = useState(null);
//   const [dataTabs, setDataTabs] = useState(null);
//   const [activeTab, setActiveTab] = useState(1);


//   const fetchAllProducts = async () => {
//     const response = await Promise.all([
//       productService.handleGetAllProducts({ sort: "-sold" }),
//       productService.handleGetAllProducts({ sort: "-createdAt" }),
//     ]);

//     if (response[0]?.success) {
//       setBestSellers(response[0].products)
//       setDataTabs(response[0].products)
//     }
//     if (response[1]?.success) setNewProducts(response[1]?.products);
//   };



//   useEffect(() => {
//     fetchAllProducts();
//   }, []);
//   useEffect(() => {
//     if (activeTab === 1) setDataTabs(bestSellers)
//     if (activeTab === 2) setDataTabs(newProducts)

//   }, [activeTab])

//   return (
//     <div className="w-full mt-5">
//       <div className="text-xl  py-5 border-b-2 border-main font-semibold">
//         {tabTitle.map((el) => {
//           return (
//             <span
//               onClick={() => setActiveTab(el.id)}
//               className={`mr-[50px] cursor-pointer  ease-out duration-500 ${activeTab === el.id ? "" : "text-gray-400"
//                 }`}
//               key={el.id}
//             >
//               {el.title}
//             </span>
//           );
//         })}
//       </div>
//       <ProductSlide dataSlider={dataTabs} isNew={activeTab === 1 ? false : true} />
//     </div>
//   );
// };

// export default BestSeller;
