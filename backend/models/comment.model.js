const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    _id: Number,
    user_id: Number,
    post_id: Number,
    text: String
})

module.exports = mongoose.model('CommentPost', CommentSchema)