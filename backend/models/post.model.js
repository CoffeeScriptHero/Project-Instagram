const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    _id: Number,
    user_id: Number,
    imagePostURL: String,
    description: String
})

module.exports = mongoose.model('Post', PostSchema)