const mongoose = require('mongoose');

const LikePostSchema = mongoose.Schema({
    _id: Number,
    user_id: {type: Number, ref: 'User'},
    post_id: {type: Number, ref: 'Post'}
})

module.exports = mongoose.model('LikePost', LikePostSchema)