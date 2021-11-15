const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    _id: Number,
    user_id: {
        type: Number, ref: 'User'
    },
    imagePostURL: String,
    description: String
})

module.exports = mongoose.model('Post', PostSchema)