import { PAGE_CHANGE_NUM, PAGE_CHANGE_PAGINATION, SET_TITLE, TOGGLE_ALERT_MODAL, TOGGLE_LOGIN_MODAL, TOGGLE_SIGNUP_MODAL } from "../actionTypes/actionTypes";

// Modal
export const toggleLoginModal = (toggle, flag) => ({
    type: TOGGLE_LOGIN_MODAL,
    payload: { flag, toggle }
})
export const toggleAlertModal = (message, color) => ({
    type: TOGGLE_ALERT_MODAL,
    payload: { message, color }
})
export const toggleSignupModal = () => ({
    type: TOGGLE_SIGNUP_MODAL,
})

export const pageChangePagination = (currentPage) => ({
    type: PAGE_CHANGE_PAGINATION,
    payload: currentPage
})

export const setTitle = (title) => ({
    type: SET_TITLE,
    payload: title
})

// export const pageChange = (newPage) => {
//     return {
//         type: PAGE_CHANGE_NUM,
//         payload: newPage
//     }
// }
