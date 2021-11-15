const LikePost = require('../../models/like.post.model');


exports.getLikesPostByPostId = async (req, res) => {
    const likesPost = await LikePost.find({post_id: req.params.post_id})
        .populate('post_id')
        .populate('user_id')
        .exec();

    if(!likesPost) {
        res.status(404).send('No likes found for this post!').end();
    }

    res.send(likesPost).end();
};

exports.getLikesPost = async (req, res) => {
    const likesPost = await LikePost.find()
        .populate('post_id')
        .populate('user_id')
        .exec();

    res.send(likesPost).end();
};