import React from "react";
import logo from "../../images/instagram-logo.jpg";
import user1 from "../../images/user1.jpg";
import "./Header-styles.scss";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import {userOperations} from "../../store/user";

const Header = () => {
    const dispatch = useDispatch();
    const UserRefHandler = () => {
        axios(`/users/1`)
            .then((res) => {
                dispatch(userOperations.setUser((res.data)))
            })
    }
  return (
    <div className="header-wrapper">
      <NavLink exact to="/Main" className="header-logo-link" onClick={UserRefHandler}>
        <img src={logo} alt={logo} width={"130"} className="header-logo-img" />
      </NavLink>
      <NavLink exact to="/User/1" className="instagram-user-link" onClick={UserRefHandler}>
        <img
          src={user1}
          alt={user1}
          width={"50"}
          className="header-user-img avatar"
        />
      </NavLink>
    </div>
  );
};

export default Header;
