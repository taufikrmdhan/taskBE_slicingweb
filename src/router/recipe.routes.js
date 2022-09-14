const express = require('express');
const { insertRecipe, listRecipe } = require('../controller/recipe.controller');

const router = express.Router();

router
.get('/recipe/list', listRecipe)
.post('/recipe/add', insertRecipe);


module.exports = router;