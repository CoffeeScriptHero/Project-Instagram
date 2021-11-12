const express = require('express');
const router = express.Router();

const { getPostsByUserId, getPosts } = require('./get.handlers')

router.get('/posts/:user_id', getPostsByUserId);
router.get('/posts', getPosts)

module.exports = router;