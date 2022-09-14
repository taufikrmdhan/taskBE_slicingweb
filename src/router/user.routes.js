const express = require('express');
const { insert, list, update, destroy } = require('../controller/user.controller');

const router = express.Router();

router
.get('/user/list', list)
.post('/user/add', insert)
.put('/user/update', update)
.delete('/user/delete/:id_user', destroy);

module.exports = router;