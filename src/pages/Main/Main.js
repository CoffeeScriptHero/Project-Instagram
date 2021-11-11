import React from "react";
import "./Main-styles.scss";
import Posts from "../../components/Posts/Posts";
import SideContent from "../../components/SideContent/SideContent";

const Main = () => {
  return (
    <div className="main-wrapper">
      <Posts />
      <SideContent />
    </div>
  );
};

export default Main;
