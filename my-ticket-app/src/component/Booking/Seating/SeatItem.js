import React from "react";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";

import { selectSeatAction } from "../../../store/booking/action";

import {
  TYPE_OF_SEAT_ENUM_COLOR,
  NOT_AVAILABLE_SEAT_ENUM_COLOR,
  SELECTED_SEAT_ENUM_COLOR,
  MAX_SEAT_SELECT_ENUM
} from "../../../common/enum";

import checkMarkIcon from "../../../asset/img/checkMark.svg";

function SeatItem({ itemSeat, row, isInModal }) {
  const alert = useAlert();
  const isAvailableSeat = itemSeat.isAvailable;
  const isSelectedSeat = itemSeat.isSelected;

  const dispatch = useDispatch();

  function _handleOnclickSeat(e) {
    if (isAvailableSeat) {
      dispatch(
        selectSeatAction({
          row,
          itemSeat,
          isSelectedSeat,
          callbackError: _handleCallBackError
        })
      );
    }
  }

  function _handleCallBackError() {
    alert.show(
      `You can only select a maximum of ${MAX_SEAT_SELECT_ENUM} seats`
    );
  }

  function _renderCheckMark() {
    if (isSelectedSeat) {
      return <img alt="" src={checkMarkIcon} />;
    }
  }

  function _renderSeat() {
    const borderColorStyle = isAvailableSeat
      ? TYPE_OF_SEAT_ENUM_COLOR[row.type]
      : NOT_AVAILABLE_SEAT_ENUM_COLOR;
    const backGroundColorStyle = isAvailableSeat
      ? isSelectedSeat
        ? SELECTED_SEAT_ENUM_COLOR
        : ""
      : NOT_AVAILABLE_SEAT_ENUM_COLOR;

    return (
      <div
        onClick={_handleOnclickSeat}
        style={{
          borderColor: borderColorStyle,
          backgroundColor: backGroundColorStyle
        }}
        className={isInModal ? "App-seat-modal" : "App-seat"}
      >
        {_renderCheckMark()}
      </div>
    );
  }
  return _renderSeat();
}
export default SeatItem;
