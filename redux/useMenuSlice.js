import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: true,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleMenu: (state, { payload }) => {
      state.isOpen = payload;
    },
  },
});

const { reducer, actions } = modalSlice;
export const { toggleMenu } = actions;
export default reducer;
