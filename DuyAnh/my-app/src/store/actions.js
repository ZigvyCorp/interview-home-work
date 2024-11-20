import { HANDLE_PRODUCTDETAIL } from "./actionType"

export const blogTestActions ={
    handleProductBlogDetail:(payload)=> {
        return{
            type: HANDLE_PRODUCTDETAIL,
            payload,
        }
    }
}