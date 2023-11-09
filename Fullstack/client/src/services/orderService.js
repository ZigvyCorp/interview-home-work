import { https } from "./axios"

export const orderService = {
    handleGetOrderUser: (params) => {
        const url = `/order/get-order-user`
        return https.get(url, { params })

    },
    handleGetOrders: (params) => {
        const url = `/order`
        return https.get(url, { params })

    },
    handleCancelOrder: (id) => {
        const url = `/order/cancel-order/${id}`
        return https.put(url)

    },
    handleUpdateStatusAdmin: (id) => {
        const url = `/order/update-status/${id}`
        return https.put(url)

    },


}