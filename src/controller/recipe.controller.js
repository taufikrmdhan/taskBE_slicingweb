const recipeModel = require('../model/recipe.model');

const recipeController = {
  insertRecipe: (req, res) => {
    const {
      id_recipe, title, image, ingredient, videostep, createdat,
    } = req.body;
    recipeModel
      .insertRecipe(id_recipe, title, image, ingredient, videostep, createdat)
      .then((result) => {
        res.json({
          message: 'success insert data',
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
  listRecipeByName: (req, res) => {
    const { title } = req.params;
    recipeModel
      .listRecipeByName(title)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  listRecipeAsc: (req, res) => {
    recipeModel
      .listRecipeAsc()
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  updateRecipe: (req, res) => {
    const {
      id_recipe, title, image, ingredient, videostep, createdat,
    } = req.body;
    recipeModel
      .updateRecipe(id_recipe, title, image, ingredient, videostep, createdat)
      .then((result) => {
        if (result.rowCount == 1) {
          res.json({
            message: 'success update data',
            data: result,
          });
        } else {
          res.json({
            message: 'failed update data',
          });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  },
  updateRecipeByName: (req, res) => {
    const { title } = req.params;
    const { image, ingredient, videostep } = req.body;
    recipeModel
      .updateRecipeByName(title, image, ingredient, videostep)
      .then((result) => {
        if (result.rowCount == 1) {
          res.json({
            message: 'success update data',
            data: result,
          });
        } else {
          res.json({
            message: 'failed update data',
          });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  },
  deleteRecipe: (req, res) => {
    const { id_recipe } = req.params;
    recipeModel
      .deleteRecipe(id_recipe)
      .then((result) => {
        res.json({
          message: 'success delete data',
          data: result,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
module.exports = recipeController;
