const express = require('express');
const router = express.Router();

const { getUserById, getUsers } = require('./get.handlers')
const { updateSubscriptionUserById } = require('./patch.handlers')

router.get('/users/:id', getUserById);
router.get('/users', getUsers)
router.patch('/users/:id', updateSubscriptionUserById)

module.exports = router;