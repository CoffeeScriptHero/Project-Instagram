import React from "react";
import "./Commentary-styles.scss";

const Commentary = () => {
  return (
    <div>
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
