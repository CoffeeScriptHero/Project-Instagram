import React from "react";
import "./Commentary-styles.scss";

const Commentary = ({ comments }) => {
  const lastComment = comments[comments.length - 1];

  return (
    <div>
      <div className="post-comments">
        {comments.length === 0 && (
          <p className="no-comments-text">There are no comments yet.</p>
        )}
        {comments.length !== 0 && (
          <div className="comment-wrapper">
            <span className="comment-nickname">{lastComment.nickname}</span>
            <span className="comment-text">{lastComment.text}</span>
          </div>
        )}
      </div>
      <form className="commentary-form">
        <textarea
          className="commentary-field"
          placeholder="Добавьте комментарий.."
        ></textarea>
        <button className="commentary-button" type="submit" disabled>
          Опубликовать
        </button>
      </form>
    </div>
  );
};

export default Commentary;
