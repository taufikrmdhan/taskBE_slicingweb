const db = require('../config/db');

const recipeModel = {
  insertRecipe: (id_recipe, title, image, ingredient, videostep, createdat) => new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO recipe (id_recipe, title, image, ingredient, videostep, createdat) VALUES (${id_recipe}, '${title}', '${image}', '${ingredient}', '${videostep}', '${createdat}')`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  listRecipe: () => new Promise((resolve, reject) => {
    db.query('SELECT * FROM recipe', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  listRecipeByName: (title) => new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM recipe WHERE title LIKE '%${title}%'`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  listRecipeAsc: () => new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM recipe ORDER BY title ASC',
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  updateRecipe: (id_recipe, title, image, ingredient, videostep, createdat) => new Promise((resolve, reject) => {
    db.query(
      `UPDATE recipe SET title = '${title}', image = '${image}', ingredient = '${ingredient}', videostep = '${videostep}', createdat = '${createdat}' WHERE id_recipe = ${id_recipe}`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  updateRecipeByName: (title, image, ingredient, videostep) => new Promise((resolve, reject) => {
    db.query(
      `UPDATE recipe SET image = '${image}', ingredient = '${ingredient}', videostep = '${videostep}' WHERE title LIKE '%${title}%'`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  deleteRecipe: (id_recipe) => new Promise((resolve, reject) => {
    db.query(
      `DELETE FROM recipe WHERE id_recipe = ${id_recipe}`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
};
module.exports = recipeModel;
