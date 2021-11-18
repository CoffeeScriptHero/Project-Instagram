import React from "react";
import Post from "../Post/Post";
import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';

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

  const [posts, setPosts] = useState([]);
  const listPosts = posts.map((post) => (
    <Post
      key={post._id}
      postId={post._id}
      userImg={post.user_id.userImageURL}
      nickname={post.user_id.username}
      img={post.imagePostURL}
      description={post.description}
    />
  ));

  const [countPosts, setCountPosts] = useState(5);

  useEffect(() => {
    axios.get("/posts",{params:{count: countPosts}})
        .then((res) => {
          setPosts(res.data);
        })
        .then(() => {
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
  }, [countPosts]);

  const getMorePosts = () => {
    setCountPosts(countPosts + 5)
  }

  return <InfiniteScroll
      style={{ overflow: 'hidden' }}
      dataLength={posts.length}
      next={getMorePosts}
      hasMore={true}
      loader={<h4>Loading...</h4>}>
    {listPosts}
  </InfiniteScroll>;
};

export default Posts;
