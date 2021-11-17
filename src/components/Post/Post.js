import React from "react";
import "./Post-styles.scss";
import Icon from "../Icon/Icon";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import {userOperations} from "../../store/user";


const Post = ({avatar, postId, nickname, img, description, userId}) => {
    const [filled, setFilled] = useState(false);
    const color = filled === true ? "red" : "black";
    const dispatch = useDispatch();
    const UserRefHandler = () => {
        axios(`/users/${userId}`)
            .then((res) => {
                dispatch(userOperations.setUser((res.data)))
            })
    }

    return (
        <div className="post-wrapper">
            <div className="post-header">
                <NavLink exact to={`/User/${userId}`} className="post-user-link" onClick={UserRefHandler}>
                    <img src={avatar} alt={img} width={"50"} height={"50"}
                         className="post-user-img avatar"/>
                </NavLink>

                <NavLink exact to={`/User/${userId}`} className="side-link" onClick={UserRefHandler}>
                    <p className="">{nickname}</p>
                </NavLink>

            </div>
            <div className="post-body">
                <img src={img} alt={img} width={"100%"} height={"100%"}/>
            </div>
            <div className="post-footer">
                <div className="post-icon-wrapper">
                    <Icon
                        type={"like"}
                        className="post-like-svg"
                        color={color}
                        filled={filled}
                        onClick={() => {
                            setFilled(!filled);
                        }}
                    />
                </div>
                <div className="post-description-wrapper">
                    <span className="post-description-user">{nickname}</span>
                    <span className="post-description-text">{description}</span>
                </div>
                <Comments postId={postId}/>
                <CommentForm/>
            </div>
        </div>
    );
};

export default Post;
