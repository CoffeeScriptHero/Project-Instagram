import React from 'react';
import "./UserPost-styles.scss"
import Icon from "../Icon/Icon";

const UserPost = ({img, likes, comments}) => {
    return (
        <div className='user-post'>
            <img src={img} alt={img} width={"100%"} height={"100%"}/>
            <div className="user-post-popup">
                <span className={"user-post-popup-info"}>
                    <Icon type={"like"} color={"white"} className="user-post-like-svg"/>
                    <span className="user-post-popup-counter">{likes}23</span>
                </span>
                <span className={"user-post-popup-info"}>
                    <Icon type={"comment"} color={"white"} className="user-post-comment-svg" filled={true}/>
                    <span className="user-post-popup-counter">{comments}23</span>
                </span>
            </div>
        </div>
    );
};

export default UserPost;