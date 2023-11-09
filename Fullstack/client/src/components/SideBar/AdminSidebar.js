// import React, { memo, useState } from "react";
// import { TbReportAnalytics } from "react-icons/tb";
// import { FiShoppingCart, FiChevronLeft } from "react-icons/fi";
// import { BiFoodMenu } from "react-icons/bi";
// import { Link, NavLink } from "react-router-dom";

// import Logo from "assets/img/logo.png";
// import path from "routes/path";
// import { icons } from "utils/icons";

// const SidebarAdmin = () => {

//     const { MdOutlineDashboard, AiOutlineUser } = icons

//     const menus = [
//         { name: "Dashboard", link: `/${path.ADMIN}/${path.DASHBOARD}`, icon: MdOutlineDashboard },
//         { name: "User", link: `/${path.ADMIN}/${path.MANAGEUSER}`, icon: AiOutlineUser },
//         { name: "Product", link: `/${path.ADMIN}/${path.MANAGEPRODUCT}`, icon: MdOutlineDashboard },
//         { name: "Category", link: `/${path.ADMIN}/${path.MANAGECATEGORY}`, icon: MdOutlineDashboard },
//         { name: "Brand", link: `/${path.ADMIN}/${path.MANAGEBRAND}`, icon: MdOutlineDashboard },
//         { name: "Order", link: `/${path.ADMIN}/${path.MANAGEORDER}`, icon: MdOutlineDashboard },
//         // {
//         //     name: "Categories",
//         //     link: "/admin/category-management",
//         //     icon: TbReportAnalytics,
//         //     margin: true,
//         // },
//         // { name: "Order", link: "/admin/order-management", icon: FiShoppingCart },
//     ];
//     const [open, setOpen] = useState(true);

//     return (
//         <div
//             className={`bg-feature min-h-screen ${open ? "w-72" : "w-16"
//                 } duration-500 text-hover px-4 pt-8 relative`}
//         >
//             <div
//                 className={`absolute cursor-pointer text-main -right-3 top-9 w-7 h-7 flex items-center justify-center border-black
//           border-2 rounded-full bg-white  ${!open && "rotate-180"}`}
//                 onClick={() => setOpen(!open)}
//             >
//                 <FiChevronLeft />
//             </div>
//             <Link
//                 to="/"
//                 className="flex items-center text-2xl  gap-3.5 font-semibold p-2 cursor-pointer transition-all ease-in-out duration-300 rounded-md"
//             >
//                 <img
//                     alt=""
//                     width={200}
//                     src={Logo}
//                     className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
//                 />

//             </Link>
//             <div className="mt-4 flex flex-col gap-4 relative">
//                 {menus?.map((menu, i) => (
//                     <NavLink

//                         to={menu?.link}
//                         key={i}
//                         className={({ isActive }) => isActive ? "group flex items-center text-sm  gap-3.5 font-medium p-2  bg-blue-600 rounded-md" : "group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-blue-600 transition-all ease-in-out duration-300 rounded-md"}
//                     >
//                         <div>{React.createElement(menu?.icon, { size: "20" })}</div>
//                         <h2
//                             style={{
//                                 transitionDelay: `${i + 3}00ms`,
//                             }}
//                             className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
//                                 }`}
//                         >
//                             {menu?.name}
//                         </h2>
//                         <h2
//                             className={`${open && "hidden"
//                                 } absolute z-50 left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
//                         >
//                             {menu?.name}
//                         </h2>
//                     </NavLink>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default memo(SidebarAdmin);
