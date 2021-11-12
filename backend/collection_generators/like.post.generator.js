const POST_COUNT = 40;
const USER_COUNT = 30;
const LIKE_POST_COUNT = 180;
const getUserId = () => Math.floor(Math.random() * (USER_COUNT - 1));
const getPostId = () => Math.floor(Math.random() * (POST_COUNT - 1));

const getLikePost = (index) => {
    return user = {
        _id: index,
        user_id: getUserId(),
        post_id: getPostId()
    };
};

module.exports = Array.from({length: LIKE_POST_COUNT},(_, index) => getLikePost(index + 1));