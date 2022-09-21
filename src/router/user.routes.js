const express = require('express');
const {
  insert, list, update, destroy, listUserById,
} = require('../controller/user.controller');
const {register, login} = require('../controller/auth.controller');

const jwtAuth = require('../middleware/jwtAuth');
const {isAdmin, isUser} = require('../middleware/authorization');
const upload = require('../middleware/upload');
const router = express.Router();

router
  .get('/user/list', jwtAuth, isAdmin ,list)
  .get('/user/list/:id_user', listUserById)
  .post('/user/add', insert)
  .put('/user/update', update)
  .delete('/user/delete/:id_user', destroy)

  .post('/user/register',upload, register)
  .post('/user/login', login);

module.exports = router;
