import React, {useEffect, useState} from 'react';
import "./UserPosts-styles.scss"
import UserPost from "../UserPost/UserPost";
import Post from "../Post/Post";
import axios from "axios";

const UserPosts = ({userId}) => {

        const [userPosts, setUserPosts] = useState([]);

        const listPosts = userPosts.map(userPost =>
            <UserPost
                key={userPost.user_id._id}
                avatar={userPost.user_id.userImageURL}
                username={userPost.user_id.username}
                img={userPost.imagePostURL}
                description={userPost.description}
                comments={[1,2,3,4,5]}/>
        )

        useEffect(() => {
                axios(`/posts/${userId}`)
                    .then((res) => {
                            setUserPosts(res.data)
                    })
        }, [userId])


    return (
        <div className='user-posts-list'>
            {listPosts}
        </div>
    );
};

export default UserPosts;