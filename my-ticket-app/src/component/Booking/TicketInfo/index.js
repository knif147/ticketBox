import React, { useState } from "react";
import { Row, Col, Button, Modal, Result } from "antd";
import { useSelector } from "react-redux";
import { getBookingSeatSelectedData } from "../../../store/selector";
import { PRICE_SEAT_ENUM } from "../../../common/enum";

function TicketInfo() {
  const [isShowModalSuccess, setIsShowModalSuccess] = useState(false);

  const arraySeatSelected = useSelector(state =>
    getBookingSeatSelectedData(state)
  );

  function _renderSeatInfo() {
    return (
      <div className="App-ticket-info-container">
        {arraySeatSelected.map(seatSelected => {
          let priceRaw = PRICE_SEAT_ENUM[seatSelected.type].price;
          const price = priceRaw.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND"
          });
          return (
            <Row className={"App-ticket-info"}>
              <Col span={18} className={"App-ticket-info-left"}>
                <Row className={"App-ticket-info-place"}>
                  {`Row ${seatSelected.rowSeatIndex} / Seat ${seatSelected.index}`}
                </Row>
              </Col>

              <Col span={6} className={"App-ticket-info-right"}>
                <Row className={"App-ticket-info-price"}>{price}</Row>
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }

  function _handleOnClickPay() {
    setIsShowModalSuccess(true);
  }

  function _renderModalSuccess() {
    return (
      <Modal visible={isShowModalSuccess} footer={null}>
        <Result
          status="success"
          title="Successfully Purchased"
          subTitle="Order number: 2017182818828182881 "
          extra={[
            <Button
              className="App-ticket-info-button"
              onClick={() => window.location.reload()}
            >
              Return
            </Button>
          ]}
        />
        ,
      </Modal>
    );
  }

  function _renderButton() {
    const totalPriceRaw = arraySeatSelected
      .map(item => PRICE_SEAT_ENUM[item.type].price)
      .slice(0, arraySeatSelected.length)
      .reduce((p, c) => p + c);
    const totalPrice = totalPriceRaw.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND"
    });
    return (
      <Row className={"App-ticket-info-button-wrapper"}>
        <Col span={12} className={"App-ticket-info-left"}>
          <Button className="App-ticket-info-button">COMBO</Button>
        </Col>

        <Col span={12} className={"App-ticket-info-right"}>
          <Button
            className="App-ticket-info-button"
            onClick={_handleOnClickPay}
          >
            {`PAY ${totalPrice}`}
          </Button>
        </Col>
      </Row>
    );
  }

  function _renderTicketInfo() {
    if (Array.isArray(arraySeatSelected) && arraySeatSelected.length > 0) {
      return (
        <Row className={"App-ticket-info-wrapper"}>
          <Row className={"App-ticket-info-title"}>CGV Crescent Mall</Row>
          <Row className={"App-ticket-info-title"}>
            09:10~11:10 | 08/07/2019
          </Row>

          {_renderSeatInfo()}
          {_renderButton()}
        </Row>
      );
    }
    return <></>;
  }

  return (
    <>
      {_renderTicketInfo()}
      {_renderModalSuccess()}
    </>
  );
}
export default TicketInfo;
