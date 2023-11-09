import { https } from "./axios"

export const userService = {
    handleRegister: (data) => {
        const url = `/user/register`
        return https.post(url, data)

    },
    handleVerifyOTP: (data) => {
        const url = `/user/verify-email`
        return https.post(url, data)

    },
    handleForgotPassword: (data) => {
        const url = `/user/forgot-password`
        return https.post(url, data)

    },
    handleVerifyOTPResetPassword: (data) => {
        const url = `/user/verify-otp-resetpassword`
        return https.post(url, data)

    },
    handleResetPassword: (data) => {
        const url = `/user/reset-password`
        return https.put(url, data)

    },

    handleLogin: (data) => {
        const url = `/user/login`
        return https.post(url, data)
    },
    handleGetCurrentUser: () => {
        const url = `/user/current-user`
        return https.get(url)
    },
    handleGetUserId: (params) => {
        const url = `/user/get-user/${params}`
        return https.get(url)
    },
    handleGetAllUsers: (params) => {
        const url = `/user/get-all-users`
        return https.get(url, { params })
    },
    handleDeleteUser: (params) => {
        const url = `/user/delete-user/${params}`
        return https.delete(url)
    },
    handleEditUser: (data) => {
        const url = `/user/update-user`
        return https.put(url, data)
    },
    handleEditUserByAdmin: (params, data) => {
        const url = `/user/update-user-admin/${params}`
        return https.put(url, data)
    },
    handleAddWishList: (params) => {
        const url = `/user/add-wishlist/${params}`
        return https.put(url)
    },
    handleAddToCart: (data) => {
        const url = `/user/add-to-cart/`
        return https.put(url, data)
    },
    handleDeleteCart: (params) => {
        const url = `/user/delete-cart/${params}`
        return https.delete(url)
    },
    handleClearCart: () => {
        const url = `/user/clear-cart`
        return https.delete(url)
    },
    handleChangeQuantity: (data) => {
        const url = `/user/change-quantity`
        return https.put(url, data)
    },
    handleAddAddress: (data) => {
        const url = `/user/add-address`
        return https.put(url, data)
    },
    handleDeleteAddress: (params) => {
        const url = `/user/delete-address/${params}`
        return https.delete(url)
    },
    handleUpdateAddress: (data) => {
        const url = `/user/update-address`
        return https.put(url, data)
    },
    handleSetDefaultAddress: (params) => {
        const url = `/user/default-address/${params}`
        return https.put(url)
    },
    handleOrder: (data) => {
        const url = `/order`
        return https.post(url, data)
    },

}