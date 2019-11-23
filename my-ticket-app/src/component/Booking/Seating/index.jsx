import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col } from "antd";
import SeatItem from "./SeatItem";
import { loadListSeatAction } from "../../../store/booking/action";
import { getBookingSeatData } from "../../../store/selector";

function Seating({ isInModal }) {
  const dispatch = useDispatch();
  const arraySeat = useSelector(state => getBookingSeatData(state));

  useEffect(() => {
    dispatch(loadListSeatAction());
  }, [dispatch]);

  function _renderSeats() {
    const seats = arraySeat.map(row => {
      if (Array.isArray(row.rowSeat)) {
        return (
          <Row>
            <Col span={2} className="App-seat-row-number">
              {_renderNumberRow(row)}
            </Col>

            <Col span={20} className={"App-seat-row"} key={row.rowSeatIndex}>
              {row.rowSeat.map(itemSeat => (
                <SeatItem
                  row={row}
                  itemSeat={itemSeat}
                  isInModal={isInModal}
                ></SeatItem>
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
  return <Row className={"App-seat-wrapper"}>{_renderSeats()}</Row>;
}
export default Seating;
