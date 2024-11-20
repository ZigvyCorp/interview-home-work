import { createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "services/blogService";


export const getAllPosts = createAsyncThunk(
  // Tên action
  'post/posts',

  // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
  async (data, { rejectWithValue }) => {

    // Gọi lên API backend
    const rs = await blogService.handleGetNews(data)



    // Nếu bị lỗi thì reject
    if (rs.status < 200 || rs.status >= 300) {
      return rejectWithValue(rs);
    }

    // Còn không thì trả về dữ liệu
    return rs;
  }
);