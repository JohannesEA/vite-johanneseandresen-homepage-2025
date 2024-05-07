import { createSlice } from "@reduxjs/toolkit";
import { IMenu } from "./types";

const initialState: IMenu = {
  menuIsActive: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuIsActive: (state) => {
      console.log(state.menuIsActive);
      state.menuIsActive = !state.menuIsActive;
    },
  },
});

export const { setMenuIsActive } = menuSlice.actions;
export default menuSlice.reducer;
