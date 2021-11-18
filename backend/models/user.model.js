const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: Number,
    username: String,
    userImageURL: String,
    firstName: String,
    password: String,
    webSite: String,
    aboutMe: String,
    subscribers: [{
        _id: Number,
        user_id: {type: Number, ref: 'User'}
    }],
    subscriptions: [{
        _id: Number,
        user_id: {type: Number, ref: 'User'}
    }]
})

module.exports = mongoose.model('User', UserSchema)