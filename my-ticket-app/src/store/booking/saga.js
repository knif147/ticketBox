import { all, put, take, call, select } from "redux-saga/effects";

import * as Action from "./action";

import bookingService from "../../service/booking";
import { getBookingSeatData, getBookingSeatSelectedData } from "./selector";
import { MAX_SEAT_SELECT_ENUM } from "../../common/enum";

function* loadListSeat() {
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

function* selectSeat() {
  while (1) {
    const action = yield take(Action.Type.SELECT_SEAT);
    try {
      const seatArray = yield select(getBookingSeatData);
      const seatSelectedArray = yield select(getBookingSeatSelectedData);

      const seatArrayClone = [...seatArray];
      const {
        payload: { row, itemSeat, isSelectedSeat, callbackError }
      } = action;
      const rowSelectedInStore = seatArrayClone.find(
        rowItem => rowItem.rowSeatIndex === row.rowSeatIndex
      );
      if (rowSelectedInStore) {
        const rowToFiltered = rowSelectedInStore.rowSeat;
        const seatSelected = rowToFiltered.find(
          rowSelectedItem => rowSelectedItem.id === itemSeat.id
        );
        const index = rowToFiltered.findIndex(item => item.id === itemSeat.id);

        if (seatSelected) {
          if (isSelectedSeat) {
            //selected-> unselected
            seatSelected.isSelected = false;
            const seatSelectedArrayClone = [...seatSelectedArray];
            const indexSeatSelectedToRemove = seatSelectedArrayClone.findIndex(
              item => item.id === seatSelected.id
            );
            seatSelectedArrayClone.splice(indexSeatSelectedToRemove, 1);
            yield put(Action.selectSeatSuccessAction(seatSelectedArrayClone));
          } else {
            if (seatSelectedArray.length < MAX_SEAT_SELECT_ENUM) {
              seatSelected.isSelected = true;
              const seatSelectedArrayClone = [...seatSelectedArray];
              const seatSelectedObject = {
                ...seatSelected,
                index: index + 1,
                rowSeatIndex: row.rowSeatIndex,
                type: row.type
              };
              seatSelectedArrayClone.push(seatSelectedObject);
              yield put(Action.selectSeatSuccessAction(seatSelectedArrayClone));
            } else {
              callbackError();
            }
          }
        }
      }

      yield put(Action.loadListSeatSuccessAction(seatArrayClone));
    } catch (error) {
      yield put(Action.loadListSeatSuccessAction(error));
    }
  }
}

export default function* rootSaga() {
  yield all([loadListSeat(), selectSeat()]);
}
