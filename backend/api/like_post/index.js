const express = require('express');
const router = express.Router();

const { getLikesPostByPostId, getLikesPost } = require('./get.handlers')

router.get('/likesPost/:post_id', getLikesPostByPostId);
router.get('/likesPost', getLikesPost)

module.exports = router;