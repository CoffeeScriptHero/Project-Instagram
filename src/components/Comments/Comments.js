import React from "react";
import "./Comments-styles.scss";
import { modalOperations } from "../../store/modal/index.js";
import { connect } from "react-redux";

const Comments = ({
  lastComment,
  comments,
  showAll,
  settings,
  saveModalSettings,
}) => {
  const listComments = comments.map((c) => (
    <div
      className="comment-wrapper comment-margin"
      key={c.user_id._id * Math.random()}
    >
      <span className="comment-nickname">{c.user_id.username}</span>
      <span className="comment-text">{c.text}</span>
    </div>
  ));

  return (
    <div>
      <div className="post-comments">
        {comments.length === 0 && (
          <p className="no-comments-text">There are no comments yet.</p>
        )}
        {comments.length !== 0 && !showAll && (
          <div className="comment-wrapper">
            <span className="comment-nickname">
              {lastComment.user_id.username}
            </span>
            <span className="comment-text">{lastComment.text}</span>
          </div>
        )}
        {comments.length >= 2 && !showAll && (
          <div className="show-more-wrapper">
            <button
              className="comments-show-more"
              onClick={() => {
                saveModalSettings(settings);
              }}
            >
              Показать больше ({comments.length})
            </button>
          </div>
        )}
        {comments.length >= 2 && showAll && listComments}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveModalSettings: (settings) =>
      dispatch(modalOperations.saveModalSettings(settings)),
  };
};

export default connect(null, mapDispatchToProps)(Comments);
