import React from "react";
import "./Subscriptions-styles.scss";
import SubscriptionsUsers from "../SubscriptionsUsers/SubscriptionsUsers";

const Subscriptions = () => {
  return (
    <div className="subscriptions-wrapper">
      <div className="subscriptions-text-wrapper">
        <span className="subscriptions-stories">Your stories</span>
        <a href={"/#"} className="subscriptions-link">
          <span className="subscriptions-check">Check all</span>
        </a>
      </div>
      <SubscriptionsUsers />
    </div>
  );
};

export default Subscriptions;
