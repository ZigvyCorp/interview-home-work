// import { TooltipComponent } from "components";
// import React, { memo, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import path from "routes/path";
// import { blogService } from "services/blogService";
// import { toastError } from "utils/helpers";
// import { icons } from "utils/icons";

// const Interact = ({ currentNews }) => {
//   const [isLike, setIsLike] = useState(false);

//   const { BsHeart, BiComment, BsBookmark, BsHeartFill } = icons;
//   const { currentUser } = useSelector((state) => state.userSlice);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const likeNews = async () => {
//     setIsLike((prev) => !prev);
//     if (currentUser) {
//       await blogService.handleLikeNews(currentNews?._id);

//       // rs?.success && dispatch(getAllPosts({ isCensor: true }));
//     } else {
//       toastError("Please login!");
//       navigate(`/${path.LOGIN}`);
//     }
//   };

//   useEffect(() => {
//     if (currentNews?.likes.find((el) => el === currentUser?._id)) {
//       setIsLike(true);
//     }
//   }, [currentNews?.likes, currentUser?._id]);

//   return (
//     <>
//       <div className="flex items-center justify-between text-xl">
//         <div className="flex items-center gap-5">
//           <TooltipComponent placement="top" title="Like">
//             {isLike ? (
//               <BsHeartFill
//                 onClick={likeNews}
//                 className="cursor-pointer text-danger"
//               />
//             ) : (
//               <BsHeart onClick={likeNews} className="cursor-pointer" />
//             )}
//           </TooltipComponent>
//           {/* <TooltipComponent placement="top" title="Comment">
//             <Link to={`/news/${currentNews?._id}`}>

//               <BiComment className="cursor-pointer" />
//             </Link>
//           </TooltipComponent> */}
//         </div>
//         <div>
//           {/* <TooltipComponent placement="top" title="Save">
//             <BsBookmark className="cursor-pointer" />
//           </TooltipComponent> */}
//         </div>
//       </div>
//       <div className="flex items-center justify-between text-sm mt-2">
//         <h6>{currentNews?.likes.length} likes</h6>
//         {/* <h6>0 comments</h6> */}
//       </div>
//     </>
//   );
// };

// export default memo(Interact);
