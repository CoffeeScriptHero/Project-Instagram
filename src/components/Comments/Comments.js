import React from "react";
import "./Comments-styles.scss";
import axios from "axios";
import { useState, useEffect } from "react";

const Comments = ({ postId }) => {
  const [showAll, setShowAll] = useState(false);
  const [comments, setComments] = useState([]);
  const [lastCommentUsername, setLastCommentUsername] = useState("");
  const [lastCommentText, setLastCommentText] = useState("");

  // const listComments = comments.map((c) => (
  //   <div className="comment-wrapper comment-margin">
  //     <span className="comment-nickname">{c.user_id.username}</span>
  //     <span className="comment-text">{c.post_id.text}</span>
  //   </div>
  // ));

  useEffect(() => {
    axios(`/comments/${postId}`).then((res) => {
      const lastElement = res.data[res.data.length - 1];
      if (lastElement) {
        setComments(res.data);
        setLastCommentUsername(lastElement.user_id.username);
        setLastCommentText(lastElement.text);
      }
    });
  }, []);

  return (
    <div>
      <div className="post-comments">
        {comments.length === 0 && (
          <p className="no-comments-text">There are no comments yet.</p>
        )}
        {comments.length !== 0 && !showAll && (
          <div className="comment-wrapper">
            <span className="comment-nickname">{lastCommentUsername}</span>
            <span className="comment-text">{lastCommentText}</span>
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
