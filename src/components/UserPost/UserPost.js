import React, {useEffect, useState} from 'react';
import "./UserPost-styles.scss"
import Icon from "../Icon/Icon";
import PostModal from "../PostModal/PostModal";

const UserPost = ({avatar, username, img, description, comments}) => {

    return (
        <div className='user-post'>
            <img src={img} alt='post image' width={"100%"} height={"100%"}/>
            <div className="user-post-popup" >
                <span className={"user-post-popup-info"}>
                    <Icon type={"like"} color={"white"} className="user-post-like-svg"/>
                    <span className="user-post-popup-counter">23</span>
                </span>
                <span className={"user-post-popup-info"}>
                    <Icon type={"comment"} color={"white"} className="user-post-comment-svg" filled={true}/>
                    <span className="user-post-popup-counter">{comments.length}</span>
                </span>
            </div>
            {/*<PostModal img={img} nickname={username} userImg={avatar} comments={comments}/>*/}
        </div>
    );
};

export default UserPost;