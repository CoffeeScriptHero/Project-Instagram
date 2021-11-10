const express = require('express');
const router = express.Router();

const { getUserById, getUsers } = require('./get.handlers')

router.get('/users/:id', getUserById);
router.get('/users', getUsers)

module.exports = router;