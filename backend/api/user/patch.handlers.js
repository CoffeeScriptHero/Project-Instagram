const User = require('../../models/user.model');

exports.updateSubscriptionUserById = async (req, res) => {
    const user = await User.findById(req.params.id).exec();

    if (!user) {
        res.status(404).send('User not found').end();
    }

    const subscriptionsList = user.subscriptions;
    if("user_id" in req.body) {
        let id = 1;
        if(user.subscriptions.length !== 0){
            id = +user.subscriptions[user.subscriptions.length - 1].id + 1;
        }
        const sub = {
            _id: id,
            user_id: req.body.user_id
        };
        subscriptionsList.push(sub)
    } else if("sub_id" in req.body) {
        subscriptionsList.splice(+req.body.sub_id - 1, +req.body.sub_id)
    }

    await User.findByIdAndUpdate(req.params.id, {
        subscriptions: subscriptionsList
    }).exec();

    res.send('User was update').end();
};
