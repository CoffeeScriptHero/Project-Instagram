import React from "react";
import "./Comments-styles.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const Comments = ({ lastComment, comments }) => {
  const [showAll, setShowAll] = useState(false);

  // const listComments = comments.map((c) => (
  //   <div className="comment-wrapper comment-margin">
  //     <span className="comment-nickname">{c.user_id.username}</span>
  //     <span className="comment-text">{c.post_id.text}</span>
  //   </div>
  // ));

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
            <button className="comments-show-more">
              Показать больше ({comments.length})
            </button>
          </div>
        )}
        {/* {comments.length >= 2 && showAll && listComments} */}
      </div>
    </div>
  );
};

export default Comments;
