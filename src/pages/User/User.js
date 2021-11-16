import React, {useEffect, useState} from 'react';
import "./User-styles.scss"
import Button from "../../components/Button/Button";
import UserPosts from "../../components/UserPosts/UserPosts";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {userOperations, userSelectors} from "../../store/user";

const User = ({userId}) => {
    // const user = useSelector(userSelectors.getUserId())
    // const dispatch = useDispatch();
    const [subscription, setSubscription] = useState(true)
    const [user, setUser] = useState({})
    useEffect(() => {
            axios(`/users/${user._id}`)
                .then((res) => {
                    console.log(res.data);
                    setUser(res.data)
                    // dispatch(userOperations.setUser((res.data)))
                })

    }, [])
    console.log(user);
    return (
        <div className="user-wrapper">
            <div className="user-header">
                <div className="user-header-img-container">
                    <img
                        src={user.userImageURL}
                        alt='user avatar'
                        width={"150"}
                        height={"150"}
                        className="user-header-img avatar"
                    />
                </div>
                <div className="user-header-content">
                    <div className="user-header-top">
                        <h1 className="user-header-title">{user.username}</h1>
                        <Button classes='user-header-button' text={subscription && 'subscribe'}/>
                    </div>
                    <div className="user-header-center">
                        <span className="user-header-counter">39 публикаций</span>
                        <span
                            className="user-header-counter">{user?.subscribers?.length && user.subscribers.length} подписчиков</span>
                        <span
                            className="user-header-counter">{user?.subscriptions?.length && user.subscriptions.length} подписок</span>
                    </div>
                    <div className="user-header-bot">
                        <p className="user-header-description">{user.aboutMe}</p>
                    </div>
                </div>
            </div>
            {/*<UserPosts user={user}/>*/}
        </div>
    );
};

export default User;