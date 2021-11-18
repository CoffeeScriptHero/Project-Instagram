const User = require('../../models/user.model');

exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id)
        .populate({
            path:"subscribers.user_id",
            select: "_id username userImageURL firstName password webSite aboutMe"})
        .populate({
            path:"subscriptions.user_id",
            select: "_id username userImageURL firstName password webSite aboutMe"})
        .exec();

    if(!user) {
        res.status(404).send('User not found!').end();
    }

    res.send(user).end();
};

exports.getUsers = async (req, res) => {
    const users = await User.find()
        .populate({
            path:"subscribers.user_id",
            select: "_id username userImageURL firstName password webSite aboutMe"})
        .populate({
            path:"subscriptions.user_id",
            select: "_id username userImageURL firstName password webSite aboutMe"})
        .exec();

    res.send(users).end();
};