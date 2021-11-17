import React from "react";
import "./Post-styles.scss";
import Icon from "../Icon/Icon";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import { useState } from "react";

const Post = ({ avatar, postId, nickname, img, description }) => {
  const [filled, setFilled] = useState(false);
  const color = filled === true ? "red" : "black";

  return (
    <div id={postId} className="post-wrapper">
      <div className="post-header">
        <a href={"/#"} className="post-user-link">
          <img
            src={avatar}
            alt={avatar}
            width={"50"}
            height={"50"}
            className="post-user-img avatar"
          />
        </a>
        <a href={"/#"} className="post-user-nickname">
          {nickname}
        </a>
      </div>
      <div className="post-body">
        <img src={img} alt={img} className="post-body-img" />
      </div>
      <div className="post-footer">
        <div className="post-icon-wrapper">
          <Icon
            type={"like"}
            className="post-like-svg"
            color={color}
            filled={filled}
            onClick={() => {
              setFilled(!filled);
            }}
          />
        </div>
        <div className="post-description-wrapper">
          <span className="post-description-user">{nickname}</span>
          <span className="post-description-text">{description}</span>
        </div>
        <Comments postId={postId} />
        <CommentForm postId={postId} />
      </div>
    </div>
  );
};

export default Post;
