import React from "react";
import Post from "../Post/Post";
import user from "../../images/user1.jpg";
import img1 from "../../images/waterfall.jpg";
import img2 from "../../images/beach.jpg";

const Posts = () => {
  return (
    <div>
      <Post
        avatar={user}
        nickname={"deniskozarenko"}
        img={img1}
        description={"Amazing view!"}
      />
      <Post
        avatar={user}
        nickname={"anastasi_s"}
        img={img2}
        description={"1234124"}
      />
    </div>
  );
};

export default Posts;
