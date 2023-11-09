import { https } from "./axios"

export const categoryService = {
    handleGetAllCategories: (params) => {
        const url = "/product-category"
        return https.get(url, { params })

    },
    handleDeleteCategory: (params) => {
        const url = `/product-category/${params}`
        return https.delete(url)

    },
    handleCreateCategory: (data) => {
        const url = `/product-category`
        return https.post(url, data)

    },
    handleUpdateCategory: (params, data) => {

        const url = `/product-category/${params}`
        return https.put(url, data)

    },
    handleUploadImageCategory: (data) => {

        const url = `/product-category/upload-category`
        return https.post(url, data)

    },
}