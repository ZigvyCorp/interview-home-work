import { createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "services/blogService";
import { categoryService } from "../services/categoryService";

export const getAllCategories = createAsyncThunk(
  // Tên action
  'product/category',

  // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
  async (data, { rejectWithValue }) => {
    // Gọi lên API backend
    const response = await categoryService.handleGetAllCategories()


    // Nếu bị lỗi thì reject
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(response);
    }

    // Còn không thì trả về dữ liệu
    return response.categories;
  }
);
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