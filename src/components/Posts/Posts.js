import React from "react";
import Post from "../Post/Post";
import { useEffect, useState} from "react";
import axios from "axios";

const Posts = () => {
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
      textArea.style.height = "26px";
    } else {
      if (textArea.classList.contains("commentary-field--bigger")) {
        textArea.classList.remove("commentary-field--bigger");
      }
      textArea.style.height = textArea.scrollHeight + "px";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.previousSibling.value);
  };

  const [posts, setPosts] = useState([]);

  const listPosts = posts.map(post =>
      <Post
      key={post._id}
      userId={post.user_id._id}
      avatar={post.user_id.userImageURL}
      nickname={post.user_id.username}
      img={post.imagePostURL}
      description={post.description}
      comments={[]}/>
      )

  useEffect(() => {
      axios('/posts')
          .then((res) => {
              setPosts(res.data)
          })
  }, [])

  useEffect(() => {
    const textAreas = document.querySelectorAll(".commentary-field");
    const btns = document.querySelectorAll(".commentary-button");
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

    btns.forEach((btn) => {
      btn.addEventListener("click", handleSubmit);
    });
  });

  return (
    <div>
      {listPosts}
    </div>
  );
};

export default Posts;
