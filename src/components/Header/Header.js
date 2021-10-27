import React from "react";
import logo from "../../images/instagram-logo.jpg";
import user from "../../images/user.jpg";
import "./Header-styles.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <a href={"/#"} className="header-logo-link">
        <img src={logo} alt={logo} width={"130"} className="header-logo-img" />
      </a>
      <a href={"/#"} className="instagram-user-link">
        <img src={user} alt={user} width={"50"} className="header-user-img" />
      </a>
    </div>
  );
};

export default Header;
