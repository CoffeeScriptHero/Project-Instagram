const Comment = require('../../models/comment.model');


exports.getCommentsByPostId = async (req, res) => {
    const comments = await Comment.find({post_id: req.params.post_id})
        .populate('user_id')
        .populate('post_id')
        .exec();

    if(!comments) {
        res.status(404).send('Posts not found!').end();
    }

    res.send(comments).end();
};

exports.getComments = async (req, res) => {
    const comments = await Comment.find()
        .populate('user_id')
        .populate('post_id')
        .exec();

    res.send(comments).end();
};