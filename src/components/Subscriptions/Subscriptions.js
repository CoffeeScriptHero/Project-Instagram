import React from "react";
import "./Subscriptions-styles.scss";

const Subscriptions = () => {
  return (
    <div className="subscriptions-wrapper">
      <div className="subscriptions-text-wrapper">
        <span className="subscriptions-stories">Your stories</span>
        <a href={"/#"} className="subscriptions-link">
          <span className="subscriptions-check">Check all</span>
        </a>
      </div>
      <div className="subscriptions-users">Some users</div>
    </div>
  );
};

export default Subscriptions;
