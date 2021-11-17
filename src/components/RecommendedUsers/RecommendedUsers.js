import SideUser from "../SideUser/SideUser";
import "./RecommendedUsers-styles.scss";
import {useEffect, useState} from "react";
import axios from "axios";

const RecommendedUsers = () => {
    const [users, setUsers] = useState([]);

    const sideUsers = users.map(user =>
        <SideUser key={user._id}
                  userId={user._id}
                  img={user.userImageURL}
                  nickname={user.username}
                  button={true}/>);

    useEffect(() => {
        axios('/users')
            .then((res) => {
                setUsers(res.data);
            })
    }, [])

    return (
        <div className="recommended-users-wrapper">
            {sideUsers}
        </div>
    );
};

export default RecommendedUsers;
