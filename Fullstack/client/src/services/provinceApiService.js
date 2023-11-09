import axios from "axios"


export const provinceApiService = {
    getProvince: async () => {
        return await axios({
            method: "GET",
            url: "https://vapi.vnappmob.com/api/province/"
        })
    },
    getDistrict: async (provinceId) => {
        return await axios({
            method: "GET",
            url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`
        })
    },
    getWard: async (districtId) => {
        return await axios({
            method: "GET",
            url: `https://vapi.vnappmob.com/api/province/ward/${districtId}`
        })
    }
}

