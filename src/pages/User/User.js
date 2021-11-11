import React from 'react';
import user from "../../images/user.jpg";
import "./User-styles.scss"
import Button from "../../components/Button/Button";
import UserPosts from "../../components/UserPosts/UserPosts";

const User = ({img, nickname, description, button}) => {
    const isSubscription = true

    return (
        <div className="user-wrapper">
            <div className="user-header">
                <div className="user-header-img-container">
                    <img
                        src={user}
                        alt={user}
                        width={"150"}
                        className="user-header-img avatar"
                    />
                </div>
                <div className="user-header-content">
                    <div className="user-header-top">
                        <h1 className="user-header-title">{nickname}</h1>
                        <Button classes='user-header-button' text={isSubscription && 'subscribe'}/>
                    </div>
                    <div className="user-header-center">
                        <span className="user-header-counter">39 публикаций</span>
                        <span className="user-header-counter">87 подписчиков</span>
                        <span className="user-header-counter">111 подписок</span>
                    </div>
                    <div className="user-header-bot">
                        <p className="user-header-description">{description}</p>
                    </div>
                </div>
            </div>
            <UserPosts/>
        </div>
    );
};

export default User;