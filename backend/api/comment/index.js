const express = require('express');
const router = express.Router();

const { getCommentsByPostId, getComments } = require('./get.handlers')
const { createComment } = require('./post.handlers')

router.get('/comments/:post_id', getCommentsByPostId);
router.get('/comments/', getComments)
router.post('/comments/', createComment);

module.exports = router;