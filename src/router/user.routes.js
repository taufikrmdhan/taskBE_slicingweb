const express = require('express');
const { insert, list, update, destroy, listUserById } = require('../controller/user.controller');

const router = express.Router();

router
.get('/user/list', list)
.get('/user/list/:id_user', listUserById)
.post('/user/add', insert)
.put('/user/update', update)
.delete('/user/delete/:id_user', destroy);

module.exports = router;