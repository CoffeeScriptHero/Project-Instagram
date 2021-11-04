import React from "react";
import "./Commentary-styles.scss";
import { useEffect } from "react";

const Commentary = () => {
  const buttonHandler = (e) => {
    const form = e.target.parentElement;
    const text = e.target.value;
    const btn = form.querySelector(".commentary-button");
    const activeClass = "commentary-button--active";
    if (text.trim() !== "") {
      btn.classList.add(activeClass);
      btn.disabled = false;
    } else {
      if (btn.classList.contains(activeClass)) {
        btn.classList.remove(activeClass);
        btn.disabled = true;
      }
    }
  };

  const keyUpHandler = (e) => {
    const textArea = e.target;
    textArea.style.height = "18px";
    if (textArea.scrollHeight > 64) {
      textArea.classList.add("commentary-field--bigger");
      textArea.style.height = "64px";
    } else {
      if (textArea.classList.contains("commentary-field--bigger")) {
        textArea.classList.remove("commentary-field--bigger");
      }
      textArea.style.height = textArea.scrollHeight + "px";
    }
  };

  useEffect(() => {
    const textAreas = document.querySelectorAll(".commentary-field");
    textAreas.forEach((textArea) => {
      textArea.addEventListener(
        "input",
        (e) => {
          keyUpHandler(e);
          buttonHandler(e);
        },
        false
      );
    });
  });

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
