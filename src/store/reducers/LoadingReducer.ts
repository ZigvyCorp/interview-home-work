import { createReducer } from "@reduxjs/toolkit";

import { LoadingActionsType } from "../actionTypes";
const initialState: { [key: string]: any } = { loading: false, opacity: 0.6 };

export default createReducer(initialState, (builder) =>
  builder
    .addCase(
      LoadingActionsType.start,
      (state, action: { [key: string]: any }) => {
        const { opacity } = action?.payload || {};
        return {
          loading: true,
          opacity: opacity || 0.6,
        };
      }
    )
    .addCase(
      LoadingActionsType.stop,
      (state, action: { [key: string]: any }) => {
        const { opacity } = action?.payload || {};
        return {
          loading: false,
          opacity: opacity || 0.6,
        };
      }
    )
    .addCase(LoadingActionsType.clear, () => ({
      loading: false,
      opacity: 0.6,
    }))
);
