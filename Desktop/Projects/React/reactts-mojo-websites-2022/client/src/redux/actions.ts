import { Dispatch } from "redux";
import { setMenuIsActive } from "./menuSlice";

export const setMenuIsActiveAction = (dispatch: Dispatch) => {
  dispatch(setMenuIsActive());
};
