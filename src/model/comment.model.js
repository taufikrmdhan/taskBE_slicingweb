const db = require('../config/db');
const commentModel = {
    insertComment: (id_comment, id_user, id_recipe, description) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO comment (id_comment, id_user, id_recipe, description) VALUES (${id_comment}, ${id_user}, ${id_recipe}, '${description}')`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    listComment: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM comment`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    deleteComment: (id_comment) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM comment WHERE id_comment = ${id_comment}`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}
module.exports = commentModel;