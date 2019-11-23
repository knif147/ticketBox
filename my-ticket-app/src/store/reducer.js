import { combineReducers } from "redux";

import bookingReducer from "./booking/reducer";

export default history =>
  combineReducers({
    booking: bookingReducer
  });
