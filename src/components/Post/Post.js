import React from "react";
import "./Post-styles.scss";
import Icon from "../Icon/Icon";
import Commentary from "../Commentary/Commentary";

const Post = ({ avatar, nickname, img, description }) => {
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
      <div className="post-footer">
        <div className="post-icons-wrapper">
          <Icon type={"like"} className="post-like-svg" />
        </div>
        <div className="post-description-wrapper">
          <span className="post-description-user">{nickname}</span>
          <span className="post-description-text">{description}</span>
        </div>
        <Commentary />
      </div>
    </div>
  );
};

export default Post;
