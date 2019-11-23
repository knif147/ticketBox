import { all, put, take, call } from "redux-saga/effects";

import * as Action from "./action";

import bookingService from "service/bookingService";

function* loadListRoster() {
  while (1) {
    const action = yield take(Action.Type.LOAD_LIST_SEAT);
    try {
      const data = yield call(bookingService.loadListSeat, action.options);
      yield put(Action.loadListSeatSuccessAction(data));
    } catch (error) {
      yield put(Action.loadListSeatSuccessAction(error));
    }
  }
}

export default function* rootSaga() {
  yield all([loadListRoster()]);
}
