import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../services/userService";


export const getCurrentUser = createAsyncThunk(
    // Tên action
    'user/current',

    // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
    async (data, { rejectWithValue }) => {
        // Gọi lên API backend
        const response = await userService.handleGetCurrentUser()



        // Nếu bị lỗi thì reject
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(response);
        }

        // Còn không thì trả về dữ liệu
        return response.response;
    }
);