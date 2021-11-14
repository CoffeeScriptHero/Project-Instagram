import React from "react";
import logo from "../../images/instagram-logo.jpg";
import user from "../../images/user.jpg";
import "./Header-styles.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <NavLink exact to="/Main" className="header-logo-link">
        <img src={logo} alt={logo} width={"130"} className="header-logo-img" />
      </NavLink>
      <NavLink exact to="/User" className="instagram-user-link">
        <img
          src={user}
          alt={user}
          width={"50"}
          className="header-user-img avatar"
        />
      </NavLink>
    </div>
  );
};

export default Header;
