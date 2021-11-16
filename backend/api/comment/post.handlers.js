const Comment = require('../../models/comment.model');
const { pick } = require('../../helpers/common.tools');

exports.createComment = async (req, res) => {
    const commentData = pick(req.body, ['user_id', 'post_id', 'text']);

    let comment;

    LikePost.find({}).sort({_id: -1}).limit(1).then(res => {
        comment = new Comment({
            _id: res[0].id + 1,
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
