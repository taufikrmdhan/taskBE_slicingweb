const fs = require("fs");
const path = require("path");
const {listUserById} = require("../model/user.model");
const {listRecipeById} = require("../model/recipe.model");

const remove = async(req, res, next) => {
  try {
    const id_user = req.params.id_user;
    const { rows: [user] } = await listUserById(id_user);
    const image = user.image;
    fs.unlink(`./public/${image}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        next();
      }
    });
  } catch (err) {
    res.json(err);
  }
};
const removeRecipe = async(req, res, next) => {
  try {
    const id_recipe = req.params.id_recipe;
    const { rows: [recipe] } = await listRecipeById(id_recipe);
    const image = recipe.image;
    fs.unlink(`./public/${image}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        next();
      }
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = {remove, removeRecipe};