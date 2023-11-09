// import React, { memo, useState, useEffect } from 'react'
// // import { filterNews } from 'utils/constants';
// import { icons } from 'utils/icons';
// import { useDispatch, useSelector } from "react-redux";
// import { getAllPosts } from "redux/asyncAction"

// const Filter = () => {
//     const [selected, setSelected] = useState("");

//     const { currentUser } = useSelector((state) => state.userSlice);
//     const { MdFilterListAlt } = icons

//     const dispatch = useDispatch()

//     const filterNews = [{ value: "", title: "All" },
//     { value: `64d79a6b82f03bf50b0ddc9a`, title: "Admin" },
//     { value: `${currentUser?._id}`, title: "My news" },
//     ]
//     useEffect(() => {
//         const queries = {}
//         if (selected) {
//             queries.author = selected
//         }
//         dispatch(getAllPosts({ ...queries, isCensor: true }))


//     }, [selected])


//     return (
//         <>
//             <h1 className="text-xl font-semibold flex items-center  border-b-2 border-main px-3 ">
//                 <div className="text-[30px] py-3 ">
//                     <MdFilterListAlt />
//                 </div>
//                 POSTED BY
//             </h1>
//             {filterNews.map((el) => {
//                 return (
//                     <div
//                         onClick={() => setSelected(el.value)}
//                         className={` ${selected === el.value && "text-main"} p-3 transition ease-out duration-300 text-sm cursor-pointer hover:text-main`
//                         }
//                         key={el.value}
//                     >
//                         {el.title}
//                     </div>
//                 );
//             })}</>
//     )
// }

// export default memo(Filter)