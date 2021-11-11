import React from "react";
import "./Recommended-styles.scss";
import RecommendedUsers from "../RecommendedUsers/RecommendedUsers.js";

const Recommended = () => {
  return (
    <div className="recommended-wrapper">
      <h3 className="recommended-title">Recommendations for you</h3>
      <RecommendedUsers />
    </div>
  );
};

export default Recommended;
