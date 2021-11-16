import React, {useEffect} from "react";
import "./SideUser-styles.scss";
import user from "../../images/user.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userOperations} from "../../store/user";
import {useDispatch} from "react-redux";

const SideUser = ({img, nickname, sidename, userId, button}) => {

    const dispatch = useDispatch();
    const UserRefHandler = () => {
        axios(`/users/${userId}`)
            .then((res) => {
                console.log(res.data);
                console.log(userId);
                dispatch(userOperations.setUser((res.data)))
            })
    }
    return (
        <div className="side-user-wrapper">
            <NavLink exact to={`/User/${userId}`} className="side-img-link" onClick={UserRefHandler}>
                <img src={img} alt={img} width={"50"} height={"50"} className="side-img avatar"/>
            </NavLink>
            <div className="side-text-wrapper">
                <NavLink exact to={`/User/${userId}`} className="side-link" onClick={UserRefHandler}>
                    <p className="side-nickname">{nickname}</p>
                </NavLink>

                <p className="side-name">{sidename}</p>
            </div>
            {
                button && (
                    <a href={"/#"} className="side-subscribe-button">
                        Subscribe
                    </a>
                )
            }
        </div>
    );
};

export default SideUser;
