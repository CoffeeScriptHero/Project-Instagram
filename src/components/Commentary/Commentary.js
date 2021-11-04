import React from "react";
import "./Commentary-styles.scss";
import { useEffect } from "react";

const Commentary = () => {
  const textAreaHandler = (e) => {
    const text = e.target.value;
    const btn = document.getElementsByClassName("commentary-button")[0];
    console.log(e.target.querySelectorAll(".commentary-button"));
    const activeClass = "commentary-button--active";
    if (text.trim() !== "") {
      btn.classList.add(activeClass);
      btn.disabled = false;
    } else {
      if (btn.classList.contains(activeClass)) {
        btn.classList.remove(activeClass);
        btn.disabled = true;
        console.log("good");
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
          textAreaHandler(e);
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
          // onChange={(e) => {
          //   textAreaHandler(e);
          // }}
        ></textarea>
        <button className="commentary-button" type="submit" disabled>
          Опубликовать
        </button>
      </form>
    </div>
  );
};

export default Commentary;
