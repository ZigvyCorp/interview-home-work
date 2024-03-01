import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { IBlog } from '@/types/blog';
import { toast } from 'react-toastify'; // Import toast để hiển thị thông báo
import blogService from '@/services/blogService';
import {
  addBlog,
  createBlog,
  deleteBlog,
  getAllBlogs,
  setBlogs,
  updateBlog,
} from '../features/blog-slice';
import { saveLogin } from '../features/auth-slice';

function* handleCreateBlog(action: PayloadAction<IBlog>) {
  try {
    const newBlog: IBlog = yield call(blogService.createBlog, action.payload);
    const { _id, ...blog } = newBlog;
    yield put(
      addBlog({
        ...blog,
        id: _id || '',
      })
    );

    toast.success('Blog created successfully');
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`Failed to create blog: ${error.message}`);
    }

    if ((error as any).response.status === 401) {
      yield put(saveLogin(null));
    }
  }
}

function* handleUpdateBlog(action: PayloadAction<IBlog>) {
  try {
    const updatedBlog: IBlog = yield call(
      blogService.updateBlog,
      action.payload.id,
      action.payload
    );
    yield put(updateBlog(updatedBlog));
    yield call(toast.success, 'Blog updated successfully');
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`Failed to update blog: ${error.message}`);
    }

    if ((error as any).response.status === 401) {
      yield put(saveLogin(null));
    }
  }
}

function* handleDeleteBlog(
  action: PayloadAction<{ blogId: string; userId: string }>
) {
  try {
    yield call(
      blogService.deleteBlog,
      action.payload.blogId,
      action.payload.userId
    );
    yield put(deleteBlog(action.payload));
    yield call(toast.success, 'Blog deleted successfully');
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`Failed to delete blog: ${error.message}`);
    }

    if ((error as any).response.status === 401) {
      yield put(saveLogin(null));
    }
  }
}

function* handleGetAllBlogs(
  action: PayloadAction<{ page: number; limit: number; q: string }>
) {
  try {
    const data: {
      blogs: IBlog[];
      total: number;
    } = yield call(blogService.getAll, action.payload);
    yield put(setBlogs(data));
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`Failed to fetch blogs: ${error.message}`);
    }

    if ((error as any).response.status === 401) {
      yield put(saveLogin(null));
    }
  }
}

export function* blogSaga() {
  yield takeLatest(createBlog.type, handleCreateBlog);
  yield takeLatest(updateBlog.type, handleUpdateBlog);
  yield takeLatest(deleteBlog.type, handleDeleteBlog);
  yield takeEvery(getAllBlogs.type, handleGetAllBlogs);
}
