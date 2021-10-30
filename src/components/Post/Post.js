import React from "react";
import "./Post-styles.scss";

const Post = ({ avatar, nickname, img }) => {
  return (
    <div className="post-wrapper">
      <div className="post-header">
        <a href={"/#"} className="post-user-link">
          <img
            src={avatar}
            alt={avatar}
            width={"40"}
            className="post-user-img avatar"
          />
        </a>
        <a href={"/#"} className="post-user-nickname">
          {nickname}
        </a>
      </div>
      <div className="post-body">
        <img src={img} alt={img} width={"100%"} height={"100%"} />
      </div>
    </div>
  );
};

export default Post;
