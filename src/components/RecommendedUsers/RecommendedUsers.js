import SideUser from "../SideUser/SideUser";
import "./RecommendedUsers-styles.scss";
import user from "../../images/user1.jpg";
// import {useEffect, useState} from "react";
// import axios from "axios";

const RecommendedUsers = () => {
  // const [users, setUsers] = useState([]);
  //
  // const sideUsers = users.map(user => <SideUser key={user.id} img={user.userImageURL} nickname={user.username} button={true} />);
  //
  // useEffect(() => {
  //     axios('/users')
  //         .then((res) => {
  //             setUsers(res.data);
  //         })
  // }, [])

  return (
    <div className="recommended-users-wrapper">
      {/*{sideUsers}*/}

      <SideUser img={user} nickname={"vitalii_g"} button={true} />
      <SideUser img={user} nickname={"vitalii_g"} button={true} />
      <SideUser img={user} nickname={"vitalii_g"} button={true} />
      <SideUser img={user} nickname={"vitalii_g"} button={true} />
      <SideUser img={user} nickname={"vitalii_g"} button={true} />
    </div>
  );
};

export default RecommendedUsers;
