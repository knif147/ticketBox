import { all } from "redux-saga/effects";

import bookingSaga from "./booking/saga";

export default function* rootSaga() {
  yield all([bookingSaga()]);
}
