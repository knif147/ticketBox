import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { rawData } from "../../../common/enum";
import SeatItem from "./SeatItem";

function Seating(props) {
  const [arraySeat, setarraySeat] = useState(rawData);

  function _renderSeats() {
    const seats = arraySeat.map(row => {
      if (Array.isArray(row.rowSeat)) {
        return (
          <Row>
            <Col span={2} className="App-seat-row-number">
              {_renderNumberRow(row)}
            </Col>

            <Col span={20} className="App-seat-row" key={row.rowSeatIndex}>
              {row.rowSeat.map(itemSeat => (
                <SeatItem row={row} itemSeat={itemSeat}></SeatItem>
              ))}
            </Col>
            <Col span={2} className="App-seat-row-number">
              {_renderNumberRow(row)}
            </Col>
          </Row>
        );
      }
    });
    return seats;
  }

  function _renderNumberRow(row) {
    return row.rowSeatIndex;
  }
  return (
    <Row>
      {/* {_renderNumberRow()} */}
      {_renderSeats()}
      {/* {_renderNumberRow()} */}
    </Row>
  );
}
export default Seating;
