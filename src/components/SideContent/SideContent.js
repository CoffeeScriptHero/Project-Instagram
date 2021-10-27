import React from "react";
import "./SideContent-styles.scss";
import SideUser from "../SideUser/SideUser";
import Subscriptions from "../Subscriptions/Subscriptions";
import Recommended from "../Recommended/Recommended";

const SideContent = () => {
  return (
    <div className="side-content-wrapper">
      <SideUser />
      <Subscriptions />
      <Recommended />
    </div>
  );
};

export default SideContent;
