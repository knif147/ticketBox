import React, { useEffect, useState } from "react";
import {
  TYPE_OF_SEAT_ENUM_COLOR,
  NOT_AVAILABLE_SEAT_ENUM_COLOR
} from "../../../common/enum";

function SeatItem({ itemSeat, row }) {
  const isAvailableSeat = itemSeat.isAvailable;
  function _renderSeat() {
    const borderColorStyle = isAvailableSeat
      ? TYPE_OF_SEAT_ENUM_COLOR[row.type]
      : NOT_AVAILABLE_SEAT_ENUM_COLOR;
    const backGroundColorStyle = isAvailableSeat
      ? ""
      : NOT_AVAILABLE_SEAT_ENUM_COLOR;

    return (
      <div
        style={{
          borderColor: borderColorStyle,
          backgroundColor: backGroundColorStyle
        }}
        className={"App-seat"}
      ></div>
    );
  }
  return _renderSeat();
}
export default SeatItem;
