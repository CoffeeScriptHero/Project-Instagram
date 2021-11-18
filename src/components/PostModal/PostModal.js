import React from "react";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import Icon from "../Icon/Icon";
import "./PostModal-styles.scss";
import { modalOperations } from "../../store/modal/index.js";
import { connect } from "react-redux";
import { useEffect } from "react";

const PostModal = ({ settings, showModal, switchModal }) => {
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
    if (textArea.scrollHeight > 26) {
      textArea.classList.add("commentary-field--bigger");
      textArea.style.height = "22px";
    } else {
      if (textArea.classList.contains("commentary-field--bigger")) {
        textArea.classList.remove("commentary-field--bigger");
      }
      textArea.style.height = textArea.scrollHeight + "px";
    }
  };
  const modalHandler = (e) => {
    const modal = document.querySelector(".post-modal-wrapper");
    if (
      modal !== null &&
      !modal.contains(e.target) &&
      !e.target.classList.contains("comments-show-more")
    ) {
      switchModal();
    }
  };
  useEffect(() => {
    const modal = document.querySelector(".post-modal-wrapper");
    if (modal) {
      const button = modal.querySelector(`#button-${settings.postId}`);
      modal
        .querySelector(".commentary-field")
        .addEventListener("input", (e) => {
          buttonHandler(e);
          keyUpHandler(e);
        });
      button.addEventListener("click", settings.handleSubmit);
    }
    document.addEventListener("click", modalHandler);
  });

  return (
    showModal && (
      <div className="post-modal">
        <div className="post-modal-wrapper">
          <div className="post-modal-img-wrapper">
            <img
              src={settings.img}
              alt={settings.img}
              className="post-modal-img"
            />
          </div>
          <div className="post-modal-content-wrapper">
            <div className="post-modal-header">
              <img
                src={settings.userImg}
                alt={settings.userImg}
                width={"32"}
                height={"32"}
                className="post-modal-user-img"
              />
              <span className="post-modal-nickname">{settings.nickname}</span>
            </div>
            <div className="post-modal-body">
              <div className="post-modal-description-wrapper">
                <img
                  src={settings.userImg}
                  alt={settings.userImg}
                  width={"32"}
                  height={"32"}
                  className="post-modal-user-img"
                />
                <span className="post-modal-nickname">{settings.nickname}</span>
                <span className="post-modal-description">
                  {settings.description}
                </span>
              </div>
              <Comments
                comments={settings.comments}
                lastComment={settings.lastComment}
                showAll={true}
              />
            </div>
            <div className="post-modal-footer">
              <div className="post-modal-icon-wrapper">
                <Icon type={"like"} className="post-like-svg" />
              </div>
              <CommentForm postId={settings.postId} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    showModal: state.modal.showModal,
    settings: state.modal.settings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchModal: () => dispatch(modalOperations.switchModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
