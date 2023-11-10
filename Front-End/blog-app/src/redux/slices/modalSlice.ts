import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ModalState {
  isShow: boolean;
}

const initialState: ModalState = {
  isShow: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isShow = true;
    },
    hiddenModal: (state) => {
      state.isShow = false;
    },
  },
});

export const { showModal, hiddenModal } = modalSlice.actions;

export const selectIsShowModal = (state: RootState) => state.modal.isShow;

export default modalSlice.reducer;
