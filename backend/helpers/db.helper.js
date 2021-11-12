const mongoose = require('mongoose');
const ConfigService = require('./config.service');

exports.connectToDatabase = async () => {
    const connectionString = ConfigService.get('CONNECTION_STRING');

    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
    });
};
