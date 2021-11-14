import React from "react";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import Icon from "../Icon/Icon";
import "./PostModal-styles.scss";

const PostModal = ({ img, userImg, nickname, comments, liked = false }) => {
  return (
    <div className="post-modal">
      <div className="post-modal-img-wrapper">
        <img
          src={img}
          alt={img}
          width={"505"}
          height={"600"}
          className="post-modal-img"
        />
      </div>
      <div className="post-modal-content-wrapper">
        <div className="post-modal-header">
          <img
            src={userImg}
            alt={userImg}
            width={"32"}
            height={"32"}
            className="post-modal-user-img"
          />
          <span className="post-modal-nickname">{nickname}</span>
        </div>
        <div className="post-modal-body">
          <Comments comments={comments} showAll={true} />
        </div>
        <div className="post-modal-footer">
          <div className="post-modal-icon-wrapper">
            <Icon type={"like"} className="post-like-svg" />
          </div>
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default PostModal;
