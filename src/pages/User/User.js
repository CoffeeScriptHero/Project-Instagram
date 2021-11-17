import React, {useEffect, useState} from 'react';
import "./User-styles.scss"
import user1 from "../../images/user1.jpg";
import Button from "../../components/Button/Button";
import UserPosts from "../../components/UserPosts/UserPosts";
import axios from "axios";

const User = ({user}) => {
    const [subscription, setSubscription] = useState(true)
    const [postsNumber, setPostsNumber] = useState(null)
    useEffect(() => {
        axios(`/posts/${user._id}`)
            .then((res) => {
                setPostsNumber(res.data.length)
            })
    }, [user])

    console.log(user);
    return (
        <div className="user-wrapper">
            <div className="user-header">
                <div className="user-header-img-container">
                    <img
                        src={user.userImageURL ? user.userImageURL :  user1}
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
                        <span className="user-header-counter">{postsNumber} публикаций</span>
                        <span
                            className="user-header-counter">{user?.subscribers?.length && user.subscribers.length} подписчиков</span>
                        <span
                            className="user-header-counter">{user?.subscriptions?.length && user.subscriptions.length} подписок</span>
                    </div>
                    <div className="user-header-bot">
                        <h2 className="user-header-description">{user.firstName}</h2>
                        <p className="user-header-description">{user.aboutMe} Check my webSite: {user.webSite}</p>
                    </div>
                </div>
            </div>
            <UserPosts user={user}/>
        </div>
    );
};

export default User;