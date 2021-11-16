const express = require('express');
const fileUpload = require('express-fileupload');

const userRouter = require('./user/index');
const postRouter = require('./post/index');
const likePostRouter = require('./like_post/index');
const commentRouter = require('./comment/index');

module.exports = (app) => {
    app.use(express.json());
    app.use(fileUpload());
    app.use(express.static('public'));

    app.use(userRouter);
    app.use(postRouter);
    app.use(likePostRouter);
    app.use(commentRouter);
};
