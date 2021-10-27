import React from "react";
import user from "../../images/user.jpg";
import "./SideUser-styles.scss";

const SideUser = () => {
  return (
    <div className="side-user-wrapper">
      <a href={"/#"} className="side-img-link">
        <img src={user} alt={user} width={"50"} className="side-img" />
      </a>
      <div className="side-text-wrapper">
        <a href={"/#"} className="side-link">
          <p className="side-nickname">funnydoge2021</p>
        </a>
        <p className="side-name">Funny Doge</p>
      </div>
    </div>
  );
};

export default SideUser;
