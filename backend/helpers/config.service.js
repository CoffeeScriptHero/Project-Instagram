require('dotenv').config();
const { init } = require('../models/user.model');

module.exports = class ConfigService {
    static get(name) {
        return process.env[name] || null;
    }

    static set(name, value) {
        process.env[name] = value;
    }
};
