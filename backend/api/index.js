const express = require('express');
const fileUpload = require('express-fileupload');

const userRouter = require('./user/index');

module.exports = (app) => {
    app.use(express.json());
    app.use(fileUpload());
    app.use(express.static('public'));

    app.use(userRouter);
};
