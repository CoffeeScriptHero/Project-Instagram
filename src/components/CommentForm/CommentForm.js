import React from "react";
import "./CommentForm-styles.scss";

const CommentaryForm = () => {
  return (
    <form className="commentary-form">
      <textarea
        className="commentary-field"
        placeholder="Добавьте комментарий.."
      ></textarea>
      <button className="commentary-button" type="submit" disabled>
        Опубликовать
      </button>
    </form>
  );
};

export default CommentaryForm;
