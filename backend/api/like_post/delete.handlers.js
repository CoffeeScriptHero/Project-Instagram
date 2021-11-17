const LikePost = require('../../models/like.post.model');

exports.deleteLikePost = async (req, res) => {
    const likePost = await LikePost.findById(req.params.id).exec();

    if (!likePost) {
        res.status(404).send('User not found').end();
    }

    await LikePost.findByIdAndDelete(req.params.id).exec();

    res.send('Like was delete.').end();
};



