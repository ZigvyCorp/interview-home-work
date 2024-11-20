// import { store } from "@/store";
// import { Action, ThunkAction } from "@reduxjs/toolkit";

import { Action, ThunkDispatch } from "@reduxjs/toolkit";

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export interface IRootState<T> {
  [key: string]: T;
}

export type ThunkAppDispatch = ThunkDispatch<IRootState<any>, void, Action>;
