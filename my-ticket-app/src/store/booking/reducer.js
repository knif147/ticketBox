import * as Action from "./action";
import update from "immutability-helper";

export const initialState = {
  loading: false,
  data: {
    listSeat: []
  }
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.Type.LOAD_LIST_SEAT:
      return update(state, {
        loading: { $set: true }
      });
    case Action.Type.LOAD_LIST_SEAT_SUCCESS:
      return update(state, {
        data: {
          listSeat: { $set: action.payload }
        },
        loading: { $set: false }
      });
    case Action.Type.LOAD_LIST_SEAT_ERROR:
      return update(state, {
        data: {
          listSeat: { $set: [] }
        },
        loading: { $set: false }
      });
    default:
      return state;
  }
};
export default reducer;
