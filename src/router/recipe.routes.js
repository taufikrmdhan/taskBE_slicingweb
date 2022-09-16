const express = require('express');
const {
  insertRecipe, listRecipe, listRecipeByName, listRecipeAsc, updateRecipe, deleteRecipe, updateRecipeByName,
} = require('../controller/recipe.controller');

const router = express.Router();

router
  .get('/recipe/list/:title', listRecipeByName)
  .get('/recipe/list', listRecipe)
  .post('/recipe/list/asc', listRecipeAsc)
  .post('/recipe/add', insertRecipe)
  .put('/recipe/update', updateRecipe)
  .put('/recipe/update/:title', updateRecipeByName)
  .delete('/recipe/delete/:id_recipe', deleteRecipe);

module.exports = router;
