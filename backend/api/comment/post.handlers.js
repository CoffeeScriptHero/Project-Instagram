const Comment = require('../../models/comment.model');
const { pick } = require('../../helpers/common.tools');

exports.createComment = async (req, res) => {
    const commentData = pick(req.body, ['user_id', 'post_id', 'text']);

    let comment;

    Comment.countDocuments({}, (err, count) => {
        comment = new Comment({
            _id: count + 1,
            ...commentData
        });
        comment.save();
        if(comment.user_id === undefined || comment.post_id === undefined || comment.text === undefined){
            res.status(404).send("Not all required parameters are specified!");
        } else {
            res.status(200).send(comment)
        }
    })



};
