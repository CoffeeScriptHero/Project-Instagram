import React from 'react';
import "./UserPosts-styles.scss"
import img2 from "../../images/beach.jpg";
import UserPost from "../UserPost/UserPost";

const UserPosts = ({Posts}) => {
    // const userPosts = Posts.map(post => <Post key={post.id}  avatar={post.avatar} description={post.description} img={post.img} nickname={post.nickname}/>)
    return (
        <div className='user-posts-list'>
            {/*{userPosts}*/}
            <UserPost
                id={1}
                img={img2}
            />
            <UserPost
                id={1}
                img={img2}
            />
            <UserPost
                id={1}
                img={img2}
            />
            <UserPost
                id={1}
                img={img2}
            />
            <UserPost
                id={1}
                img={img2}
            />

        </div>
    );
};

export default UserPosts;