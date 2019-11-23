import { createSelector } from "reselect";

export const getBookingLoading = state => state.booking.loading;
export const getBookingSeatData = createSelector(
  state => state.booking.data.listSeat,
  listSeat => listSeat || []
);

export const getBookingSeatSelectedData = createSelector(
  state => state.booking.data.listSeatSelected,
  listSeatSelected => listSeatSelected || []
);
