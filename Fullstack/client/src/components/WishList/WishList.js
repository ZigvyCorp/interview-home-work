// import React from 'react'
// import { icons } from 'utils/icons'
// import { TooltipComponent } from "components"
// import { userService } from 'services/userService'
// import { useDispatch, useSelector } from 'react-redux'
// import { toastError } from 'utils/helpers'
// import { useNavigate } from 'react-router-dom'
// import path from 'routes/path'
// import { getCurrentUser } from 'redux/AsyncAction/user'

// const WishList = ({ productID }) => {
//     const { BsHeart, BsHeartFill } = icons
//     const { currentUser } = useSelector((state) => state.userSlice);
//     const navigate = useNavigate()
//     const dispatch = useDispatch()

//     const handleAddWishList = async () => {
//         if (currentUser) {
//             const response = await userService.handleAddWishList(productID)
//             if (response?.success) {
//                 dispatch(getCurrentUser())
//             }
//         } else {
//             toastError("Please login!");
//             navigate(`/${path.LOGIN}`)
//         }

//     }


//     return (
//         <div onClick={handleAddWishList} className='absolute top-0 right-[15px] text-[25px] cursor-pointer'>
//             {
//                 currentUser?.wishList?.find((el) => el?._id === productID) ? <TooltipComponent placement="top" title="Added Wish list">
//                     <BsHeartFill className="text-danger" />

//                 </TooltipComponent> : <TooltipComponent placement="top" title="Add Wish list">
//                     <BsHeart />

//                 </TooltipComponent>
//             }

//         </div>
//     )
// }

// export default WishList