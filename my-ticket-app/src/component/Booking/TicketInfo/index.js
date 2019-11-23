import React, { useEffect, useState } from "react";
import { Icon, Row, Col, Button } from "antd";

function TicketInfo() {
  return (
    <Row className={"App-ticket-info-wrapper"}>
      <Row className={"App-ticket-info-title"}>CGV Crescent Mall</Row>
      <Row className={"App-ticket-info-title"}>09:10~11:10 | 08/07.2019</Row>

      <Row className={"App-ticket-info"}>
        <Col span={18} className={"App-ticket-info-left"}>
          <Row className={"App-ticket-info-place"}>Row 8 / Seat 6</Row>
          <Row className={"App-ticket-info-place"}>Row 8 / Seat 7</Row>
        </Col>

        <Col span={6} className={"App-ticket-info-right"}>
          <Row className={"App-ticket-info-price"}>180.000đ</Row>
        </Col>
      </Row>
      <Row className={"App-ticket-info-button-wrapper"}>
        <Col span={12} className={"App-ticket-info-left"}>
          <Button className="App-ticket-info-button">COMBO</Button>
        </Col>

        <Col span={12} className={"App-ticket-info-right"}>
          <Button className="App-ticket-info-button">PAYMENT</Button>
        </Col>
      </Row>
    </Row>
  );
}
export default TicketInfo;
