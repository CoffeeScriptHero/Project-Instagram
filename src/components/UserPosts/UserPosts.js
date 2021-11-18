import React, {useEffect, useState} from 'react';
import "./UserPosts-styles.scss"
import UserPost from "../UserPost/UserPost";
import axios from "axios";

const UserPosts = ({user}) => {

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
                axios(`/posts/${user._id}`)
                    .then((res) => {
                            setUserPosts(res.data)
                    })
        }, [user])


    return (
        <div className='user-posts-list'>
            {listPosts}
        </div>
    );
};

export default UserPosts;