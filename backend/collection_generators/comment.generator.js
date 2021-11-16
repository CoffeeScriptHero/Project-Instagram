const POST_COUNT = 40;
const USER_COUNT = 30;
const COMMENT_COUNT = 50;

const getUserId = () => Math.floor(Math.random() * (USER_COUNT - 1));
const getPostId = () => Math.floor(Math.random() * (POST_COUNT - 1))
const getText = (index) => `Comment with id: ${index}.`

const getComment = (index) => {
    return comment = {
        _id: index,
        user_id: getUserId(),
        post_id: getPostId(),
        text: getText(index)
    };
};

module.exports = Array.from({length: COMMENT_COUNT},(_, index) => getComment(index + 1));