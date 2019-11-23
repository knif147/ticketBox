import React, { useEffect, useState } from "react";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./Header";
import userIcon from "../../asset/img/bannerScreen.svg";
import Seating from "./Seating";
import Zoom from "./Zoom";
import Description from "./Description";
import TicketInfo from "./TicketInfo";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

function Booking(props) {
  return (
    <Provider template={AlertTemplate} {...options}>
      <div className={"App-main-page"}>
        <div className={"App-vertical-layout"}>
          <Header></Header>
          <img className={"App-banner-screen "} alt="" src={userIcon} />
          <Seating></Seating>
          <Zoom></Zoom>
          <Description></Description>
          <TicketInfo></TicketInfo>
        </div>
      </div>
    </Provider>
  );
}
export default Booking;
