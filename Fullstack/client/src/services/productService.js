import { https } from "./axios"

export const productService = {
    handleGetAllProducts: (params) => {
        const url = `/product/get-all-products`
        return https.get(url, { params })

    },
    handleGetProduct: (params) => {
        const url = `/product/get-product/${params}`
        return https.get(url)

    },
    handleCreateProduct: (data) => {
        const url = `/product/create-product`
        return https.post(url, data)

    },
    handleUpdateProduct: (params, data) => {

        const url = `/product/update-product/${params}`
        return https.put(url, data)

    },
    handleDeleteProduct: (params) => {
        const url = `/product/delete-product/${params}`
        return https.delete(url)

    },
    handleGetAllBrands: () => {
        const url = `/brand`
        return https.get(url)

    },
    handleRatingProduct: (data) => {
        const url = `/product/rating-product`
        return https.put(url, data)

    },
    handleGetFeedbacks: (params) => {
        const url = `/product/feedback`
        return https.get(url, { params })

    },
}