import React from "react";
import SideUser from "../SideUser/SideUser";
import "./RecommendedUsers-styles.scss";
import user from "../../images/user1.jpg";

const RecommendedUsers = () => {
  return (
    <div className="recommended-users-wrapper">
      <SideUser img={user} nickname={"vitalii_g"} button={true} />
      <SideUser img={user} nickname={"vitalii_g"} button={true} />
      <SideUser img={user} nickname={"vitalii_g"} button={true} />
    </div>
  );
};

export default RecommendedUsers;
