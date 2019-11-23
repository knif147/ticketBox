import React, { useEffect, useState } from "react";
import Header from "./Header";
import userIcon from "../../asset/img/bannerScreen.svg";
import Seating from "./Seating";
import Zoom from "./Zoom";
import Description from "./Description";
import TicketInfo from "./TicketInfo";

function Booking(props) {
  return (
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
  );
}
export default Booking;
