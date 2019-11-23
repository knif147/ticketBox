import { createAction } from "redux-actions";

export const Type = {
  LOAD_LIST_SEAT: "LOAD_LIST_SEAT",
  LOAD_LIST_SEAT_SUCCESS: "LOAD_LIST_SEAT_SUCCESS",
  LOAD_LIST_SEAT_ERROR: "LOAD_LIST_SEAT_ERROR",

  SELECT_SEAT: "SELECT_SEAT",
  SELECT_SEAT_SUCCESS: "SELECT_SEAT_SUCCESS",
  SELECT_SEAT_ERROR: "SELECT_SEAT_ERROR"
};
export const loadListSeatAction = createAction(Type.LOAD_LIST_SEAT);
export const loadListSeatSuccessAction = createAction(
  Type.LOAD_LIST_SEAT_SUCCESS
);
export const loadListSeatErrorAction = createAction(Type.LOAD_LIST_SEAT_ERROR);

export const selectSeatAction = createAction(Type.SELECT_SEAT);
export const selectSeatSuccessAction = createAction(Type.SELECT_SEAT_SUCCESS);
export const selectSeatErrorAction = createAction(Type.SELECT_SEAT_ERROR);
