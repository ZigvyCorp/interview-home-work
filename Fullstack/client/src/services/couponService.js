import { https } from "./axios"

export const couponService = {
    handleGetCoupon: (params) => {
        const url = `/coupon/get-coupon/${params}`
        return https.get(url)

    },


}