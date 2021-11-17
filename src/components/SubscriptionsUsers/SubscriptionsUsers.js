import React, {useEffect, useState} from "react";
import user from "../../images/user.jpg";
import SideUser from "../SideUser/SideUser";
import "./SubscriptionsUsers-styles.scss";
import UserPost from "../UserPost/UserPost";
import axios from "axios";

const SubscriptionsUsers = () => {

    const [subscriptionUsers, setSubscriptionUsers] = useState([]);

    const users = subscriptionUsers.map(user =>
        <SideUser
            key={user._id}
            userId={user._id}
            img={user.userImageURL}
            nickname={user.username}
            sidename={user.firstName}
            description={user.description}            />
    )

    useEffect(() => {
        axios(`/users`)
            .then((res) => {
                setSubscriptionUsers(res.data)
            })
    }, [])

  return (
    <div className="subscriptions-users-wrapper">
      {/* пока пользователи задаются искуственно, потом они будут генерироваться в цикле из подписок */}
        {users}
    </div>
  );
};

export default SubscriptionsUsers;
