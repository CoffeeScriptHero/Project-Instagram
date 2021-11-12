const User = require('../../models/user.model');


exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id).exec();

    if(!user) {
        res.status(404).send('User not found!').end();
    }

    res.send(user).end();
};

exports.getUsers = async (req, res) => {
    const users = await User.find().exec();

    res.send(users).end();
};