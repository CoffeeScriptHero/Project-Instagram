const express = require('express');
const router = express.Router();

const { getLikesPostByPostId, getLikesPost } = require('./get.handlers')
const { deleteLikePost } = require('./delete.handlers')
const { createLikePost } = require('./post.handlers')

router.get('/likesPost/:post_id', getLikesPostByPostId);
router.get('/likesPost', getLikesPost)
router.delete('/likesPost/:id', deleteLikePost)
router.post('/likesPost', createLikePost)

module.exports = router;