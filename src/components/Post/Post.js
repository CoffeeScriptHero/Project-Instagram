import React from "react";
import "./Post-styles.scss";
import Icon from "../Icon/Icon";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { userOperations } from "../../store/user";

const Post = ({ avatar, postId, nickname, img, description, userId }) => {
  const [filled, setFilled] = useState(false);
  const [comments, setComments] = useState([]);
  const [lastComment, setLastComment] = useState({
    user_id: { username: "" },
    text: "",
  });
  const [id, setId] = useState(null);
  const [likesCount, setLikesCount] = useState(0);

  const dispatch = useDispatch();
  const UserRefHandler = () => {
    axios(`/users/${userId}`).then((res) => {
      dispatch(userOperations.setUser(res.data));
    });
  };

  const color = filled === true ? "red" : "black";

  const getLastComment = () => {
    axios(`/comments/${postId}`).then((res) => {
      const lastElement = res.data[res.data.length - 1];
      if (lastElement) {
        setComments(res.data);
        setLastComment({
          user_id: { username: lastElement.user_id.username },
          text: lastElement.text,
        });
      }
    });
  };

  const likeHandler = () => {
    if (!filled) {
      axios
        .post(`/likesPost`, {
          user_id: 1,
          post_id: postId,
        })
        .then(() => {
          setFilled(true);
          setLikesCount(likesCount + 1);
          checkLike();
        });
    } else {
      axios.delete(`/likesPost/${id}`).then(() => {
        setFilled(false);
        setLikesCount(likesCount - 1);
        checkLike();
      });
    }
  };

  const checkLike = () => {
    axios(`/likesPost/${postId}`).then((res) => {
      setLikesCount(res.data.length);
      res.data.forEach((user) => {
        if (user.user_id._id === 1) {
          setFilled(true);
          setId(user._id);
        }
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postId = e.target.id.slice(e.target.id.lastIndexOf("-") + 1);
    const text = e.target.previousSibling.value;
    axios
      .post("/comments", {
        user_id: 1,
        post_id: postId,
        text: text,
      })
      .then(() => {
        getLastComment();
      });
    e.target.previousSibling.value = "";
    e.target.classList.remove("commentary-button--active");
  };

  useEffect(() => {
    checkLike();
    getLastComment();
    const currentPost = document.getElementById(postId);
    const button = currentPost.querySelector(".commentary-button");
    button.addEventListener("click", handleSubmit);
  }, []);

  return (
    <div id={postId} className="post-wrapper">
      <div className="post-header">
        <NavLink
          exact
          to={`/User/${userId}`}
          className="post-user-link"
          onClick={UserRefHandler}
        >
          <img
            src={avatar}
            alt={img}
            width={"50"}
            height={"50"}
            className="post-user-img avatar"
          />
        </NavLink>

        <NavLink
          exact
          to={`/User/${userId}`}
          className="side-link"
          onClick={UserRefHandler}
        >
          <p className="post-user-nickname">{nickname}</p>
        </NavLink>
      </div>
      <div className="post-body">
        <img
          src={img}
          alt={img}
          className="post-body-img"
          onDoubleClick={likeHandler}
        />
      </div>
      <div className="post-footer">
        <div className="post-icon-wrapper">
          <Icon
            type={"like"}
            className="post-like-svg"
            color={color}
            filled={filled}
            onClick={likeHandler}
          />
          <span className="post-likes-number">{likesCount}</span>
        </div>
        <div className="post-description-wrapper">
          <span className="post-description-user">{nickname}</span>
          <span className="post-description-text">{description}</span>
        </div>
        <Comments lastComment={lastComment} comments={comments} />
        <CommentForm postId={postId} />
      </div>
    </div>
  );
};

export default Post;
