import React, { useEffect, useState } from "react";
import { Icon, Row, Col } from "antd";

function Header(props) {
  return (
    <Row className={"App-header-wrapper"}>
      <Col span={6} className={"App-header-icon-arrow-left"}>
        <Icon type="left" />
      </Col>
      <Col span={12} className={"App-header-center"}>
        <div className={"App-header-center-title"}>
          Spider-man: Người Nhện xa nhà
        </div>

        <div className={"App-header-center-info"}>C31|2D Vietsub</div>
      </Col>
      <Col span={6} />
    </Row>
  );
}
export default Header;
