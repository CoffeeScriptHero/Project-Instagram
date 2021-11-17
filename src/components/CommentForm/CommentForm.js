import React from "react";
import "./CommentForm-styles.scss";

const CommentaryForm = ({ postId }) => {
  return (
    <form className="commentary-form">
      <textarea
        className="commentary-field"
        placeholder="Добавьте комментарий.."
      ></textarea>
      <button
        id={`button-${postId}`}
        className="commentary-button"
        type="submit"
        disabled
      >
        Опубликовать
      </button>
    </form>
  );
};

export default CommentaryForm;
