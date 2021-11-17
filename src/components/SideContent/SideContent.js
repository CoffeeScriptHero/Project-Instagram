import React, {useEffect, useState} from "react";
import "./SideContent-styles.scss";
import SideUser from "../SideUser/SideUser";
import Subscriptions from "../Subscriptions/Subscriptions";
import Recommended from "../Recommended/Recommended";
import user1 from "../../images/user1.jpg";

const SideContent = () => {
  return (
    <div className="side-content-wrapper">
      <SideUser img={user1} nickname="mainuser" sidename='User' userId={1}/>
      <Subscriptions />
      <Recommended />
    </div>
  );
};

export default SideContent;
