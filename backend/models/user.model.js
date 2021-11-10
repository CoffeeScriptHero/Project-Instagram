const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: Number,
    username: String,
    userImageURL: String,
    firstName: String,
    password: String,
    webSite: String,
    aboutMe: String
})

module.exports = mongoose.model('User', UserSchema)