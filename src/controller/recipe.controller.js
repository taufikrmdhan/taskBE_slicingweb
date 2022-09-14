const recipeModel = require("../model/recipe.model");
const userModel = require("../model/recipe.model");

const recipeController = {
  insertRecipe: (req, res) => {
    const { id_recipe, title, image, ingredient, videostep, createdat } =
      req.body;
    recipeModel
      .insertRecipe(id_recipe, title, image, ingredient, videostep, createdat)
      .then((result) => {
        res.json({
          message: "success insert data",
          data: result,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  },
  listRecipe: (req, res) => {
    recipeModel
      .listRecipe()
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
module.exports = recipeController;
