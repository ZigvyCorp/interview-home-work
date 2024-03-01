import { apiGetAllPost } from "@/apis/data"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchInitialData = createAsyncThunk(
    'data/initialData',
    async () => {

        const response = await apiGetAllPost(1, 5)

        return response.data.data
    }
)