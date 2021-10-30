import React from "react";
import "./SideContent-styles.scss";
import user from "../../images/user.jpg";
import SideUser from "../SideUser/SideUser";
import Subscriptions from "../Subscriptions/Subscriptions";
import Recommended from "../Recommended/Recommended";

const SideContent = () => {
  return (
    <div className="side-content-wrapper">
      <SideUser img={user} nickname={"funnydoge2021"} sidename={"Funny Doge"} />
      <Subscriptions />
      <Recommended />
    </div>
  );
};

export default SideContent;
