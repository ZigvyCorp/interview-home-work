import { isRejected, isRejectedWithValue } from "@reduxjs/toolkit";
function isPayloadErrorMessage(payload: unknown): payload is {
    code: number
    message: string
    errors: any[]
    status: number
} {
    return typeof payload === 'object' && payload !== null && 'message' in payload && typeof (payload as any).message === 'string'
}

export const rtkQueryErrorLogger = () => (next: any) => (action: any) => {

    if (isRejected(action)) {
        if (action.error.message === "Rejected") {
            //check hình dạng dataError => isPayloadErrorMessage khi ở trạng thái Rejected
            //có thể toast lỗi backend trả về cho người dùng tại đây
        }
    }

    return next(action)
}