import React, { useEffect, useState } from "react";
import { Icon, Row, Col, Button } from "antd";

function Zoom(props) {
  return (
    <Row className={"App-zoom-wrapper"}>
      {/* <Col span={2}></Col> */}
      <Button className={"App-zoom-button"}>ZOOM OUT</Button>
    </Row>
  );
}
export default Zoom;
