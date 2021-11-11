const mongoose = require('mongoose');

const LikePostSchema = mongoose.Schema({
    _id: Number,
    user_id: Number,
    post_id: Number
})

module.exports = mongoose.model('LikePost', LikePostSchema)