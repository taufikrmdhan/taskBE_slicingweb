const db = require('../config/db');
const recipeModel = {
    
    insertRecipe: (id_recipe, title, image, ingredient, videostep, createdat) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO recipe (id_recipe, title, image, ingredient, videostep, createdat) VALUES (${id_recipe}, '${title}', '${image}', '${ingredient}', '${videostep}', '${createdat}')`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    listRecipe: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM recipe`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
}
module.exports = recipeModel;