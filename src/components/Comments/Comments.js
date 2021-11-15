import React from "react";
import "./Comments-styles.scss";

const Comments = ({ comments, showAll = false }) => {
  const lastComment = comments[comments.length - 1];

  const generateComments = () => {
    // key={c.id}
    return comments.map((c) => (
      <div className="comment-wrapper comment-margin">
        <span className="comment-nickname">{c.nickname}</span>
        <span className="comment-text">{c.text}</span>
      </div>
    ));
  };

  const commentsList = generateComments();

  return (
    <div>
      <div className="post-comments">
        {comments.length === 0 && (
          <p className="no-comments-text">There are no comments yet.</p>
        )}
        {comments.length !== 0 && !showAll && (
          <div className="comment-wrapper">
            <span className="comment-nickname">{lastComment.nickname}</span>
            <span className="comment-text">{lastComment.text}</span>
          </div>
        )}
        {comments.length >= 2 && !showAll && (
          <div className="show-more-wrapper">
            <button className="comments-show-more">
              Показать больше ({comments.length})
            </button>
          </div>
        )}
        {comments.length >= 2 && showAll && commentsList}
      </div>
    </div>
  );
};

export default Comments;
