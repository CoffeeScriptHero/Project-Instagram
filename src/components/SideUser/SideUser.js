import React from "react";
import "./SideUser-styles.scss";

const SideUser = ({ img, nickname, sidename }) => {
  return (
    <div className="side-user-wrapper">
      <a href={"/#"} className="side-img-link">
        <img src={img} alt={img} width={"50"} className="side-img avatar" />
      </a>
      <div className="side-text-wrapper">
        <a href={"/#"} className="side-link">
          <p className="side-nickname">{nickname}</p>
        </a>
        <p className="side-name">{sidename}</p>
      </div>
    </div>
  );
};

export default SideUser;
