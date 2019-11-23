import React, { useEffect, useState } from "react";
import { Icon, Row, Col } from "antd";
import {
  TYPE_OF_SEAT_ENUM_COLOR,
  NOT_AVAILABLE_SEAT_ENUM_COLOR
} from "../../../common/enum";

function Description(props) {
  return (
    <div className={"App-description-wrapper"}>
      <Row>
        <Col span={8} className={"App-description-item"}>
          <div
            style={{
              backgroundColor: NOT_AVAILABLE_SEAT_ENUM_COLOR
            }}
            className={"App-seat-description-img"}
          ></div>
          <div className={"App-seat-description"}>Reserved</div>
        </Col>
        <Col span={8} className={"App-description-item"}>
          <div
            style={{
              borderColor: TYPE_OF_SEAT_ENUM_COLOR[1]
            }}
            className={"App-seat-description-img"}
          ></div>
          <div className={"App-seat-description"}>Available</div>
        </Col>
        <Col span={8} className={"App-description-item"}>
          <div className={"App-seat-description-img"}></div>
          <div className={"App-seat-description"}>Your Seat</div>
        </Col>
      </Row>
      <Row>
        <Col span={8} className={"App-description-item"}>
          <div
            style={{
              borderColor: TYPE_OF_SEAT_ENUM_COLOR[1]
            }}
            className={"App-seat-description-img"}
          ></div>
          <div className={"App-seat-description"}>Standard</div>
        </Col>
        <Col span={8} className={"App-description-item"}>
          <div
            style={{
              borderColor: TYPE_OF_SEAT_ENUM_COLOR[2]
            }}
            className={"App-seat-description-img"}
          ></div>
          <div className={"App-seat-description"}>VIP</div>
        </Col>
        <Col span={8} className={"App-description-item"}>
          <div
            style={{
              borderColor: TYPE_OF_SEAT_ENUM_COLOR[3]
            }}
            className={"App-seat-description-img"}
          ></div>

          <div className={"App-seat-description"}>Deluxe</div>
        </Col>
      </Row>
    </div>
  );
}
export default Description;
