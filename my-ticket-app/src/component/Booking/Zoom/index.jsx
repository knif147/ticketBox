import React, { useState } from "react";
import { Row, Button, Modal } from "antd";
import Seating from "../Seating";

function Zoom(props) {
  const [isShowModalZoom, setIsShowModalZoom] = useState(false);

  function _handleOnClickZoomOut() {
    setIsShowModalZoom(!isShowModalZoom);
  }

  function _renderZoomModal() {
    return (
      <Modal
        className={"App-seat-wrapper-modal"}
        visible={isShowModalZoom}
        width={"90%"}
        footer={null}
        onCancel={_handleOnClickZoomOut}
      >
        <Seating isInModal></Seating>
      </Modal>
    );
  }

  return (
    <>
      <Row className={"App-zoom-wrapper"}>
        <Button className={"App-zoom-button"} onClick={_handleOnClickZoomOut}>
          ZOOM OUT
        </Button>
      </Row>
      {_renderZoomModal()}
    </>
  );
}
export default Zoom;
