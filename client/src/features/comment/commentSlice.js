import { createSlice } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";
import todoApi from "../../apis/todoApi";

export const addTodoAsync = createAction("todo/addTodoAsync");
export const getTodoAsync = createAction("todo/getTodoAsync");

const addTodoAPI = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(payload), 1000);
  });
};

function* getTodoSaga() {
  const data = yield call(todoApi.getTodos);
  yield put(getTodos(data));
}

function* addTodoSaga(action) {
  const data = yield call(addTodoAPI, action.payload);
  yield put(addTodo(data));
}

export function* todoSaga() {
  yield all([
    takeLatest(getTodoAsync, getTodoSaga),
    takeLatest(addTodoAsync, addTodoSaga),
  ]);
}

const initialState = {
  todos: [],
  status: "idle",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
  },
});

export const { getTodos, addTodo, removeTodo } = todoSlice.actions;

export const selectTodo = (state) => state.todo;

export default todoSlice.reducer;
