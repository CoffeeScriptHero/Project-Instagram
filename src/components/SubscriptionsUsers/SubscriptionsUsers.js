import React from "react";
import user from "../../images/user.jpg";
import SideUser from "../SideUser/SideUser";
import "./SubscriptionsUsers-styles.scss";

const SubscriptionsUsers = () => {
  return (
    <div className="subscriptions-users-wrapper">
      {/* пока пользователи задаются искуственно, потом они будут генерироваться в цикле из подписок */}
      <SideUser img={user} nickname={"vitalii_g"} sidename={"Vitalii Griva"} />
      <SideUser img={user} nickname={"Suzanna1"} sidename={"Suzanna Suzanna"} />
      <SideUser img={user} nickname={"ErikBz"} sidename={"Erik Edward"} />
      <SideUser img={user} nickname={"Trinity"} sidename={"Natalia Romanova"} />
      <SideUser img={user} nickname={"Trinity"} sidename={"Natalia Romanova"} />
      <SideUser img={user} nickname={"Trinity"} sidename={"Natalia Romanova"} />
    </div>
  );
};

export default SubscriptionsUsers;
