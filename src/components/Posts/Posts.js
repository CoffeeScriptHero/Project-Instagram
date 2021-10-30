import React from "react";
import Post from "../Post/Post";
import user from "../../images/user1.jpg";
import img from "../../images/waterfall.jpg";

const Posts = () => {
  return (
    <div>
      <Post avatar={user} nickname={"deniskozarenko"} img={img} />
      {/* <Post avatar={user} nickname={"anastasi_s"} /> */}
    </div>
  );
};

export default Posts;
