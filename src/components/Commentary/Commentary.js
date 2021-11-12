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
        {comments.length >= 2 && (
          <div className="show-more-wrapper">
            <a href={"/#"} className="comments-show-more">
              Показать больше ({comments.length})
            </a>
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
