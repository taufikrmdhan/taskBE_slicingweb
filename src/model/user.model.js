const db = require('../config/db');
const userModel = {
    insert: (id_user, nama, email, password, phone) => {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO users (id_user, nama, email, password, phone) VALUES (${id_user}, '${nama}', '${email}', '${password}', '${phone}')`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    list: () => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM users`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    listUserById: (id_user) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM users WHERE id_user = ${id_user}`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    destroy: (id_user) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM users WHERE id_user = ${id_user}`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    update: (id_user,password) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE users SET password = '${password}' WHERE id_user = ${id_user}`, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}
module.exports = userModel;