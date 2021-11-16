const mongoose = require('mongoose');

const LikePostSchema = mongoose.Schema({
    _id: Number,
    user_id: {
        type: Number,
        ref: 'User',
        required: true},
    post_id: {
        type: Number,
        ref: 'Post',
        required: true}
})

module.exports = mongoose.model('LikePost', LikePostSchema)