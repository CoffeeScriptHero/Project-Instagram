const LikePost = require('../../models/like.post.model');
const { pick } = require('../../helpers/common.tools');

exports.createLikePost = async (req, res) => {
    const likePostData = pick(req.body, ['user_id', 'post_id']);

    let likePost;

    LikePost.find({}).sort({_id: -1}).limit(1).then(resId => {
        likePost = new LikePost({
            _id: +resId[0].id + 1,
            ...likePostData
        });
        likePost.save();
        if(likePost.user_id === undefined || likePost.post_id === undefined){
            res.status(404).send("Not all required parameters are specified!");
        } else {
            res.status(200).send(likePost)
        }
    })
};





