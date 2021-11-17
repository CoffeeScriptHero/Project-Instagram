const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    _id: Number,
    user_id: {
        type: Number,
        ref: 'User',
        required: [true, "No user id!"]
    },
    post_id: {
        type: Number,
        ref: 'Post',
        required: [true, () => "No post id!"]
    },
    text: {
        type: String,
        required: [true, 'No text!']
    }
})

module.exports = mongoose.model('CommentPost', CommentSchema)