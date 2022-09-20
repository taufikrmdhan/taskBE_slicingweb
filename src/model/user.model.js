const db = require('../config/db');

const userModel = {
  insert: (nama, email, password, phone) => new Promise((resolve, reject) => {
    db.query(`INSERT INTO users (nama, email, password, phone) VALUES ('${nama}', '${email}', '${password}', '${phone}')`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  register: ({nama, email, password, phone, level}) => new Promise((resolve, reject) => {
    db.query(`INSERT INTO users (nama, email, password, phone, level) VALUES ('${nama}', '${email}', '${password}', '${phone}', ${level})`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  checkUsername: (nama) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM users WHERE nama = '${nama}'`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    })
  },
  list: (limit, offset) => new Promise((resolve, reject) => {
    db.query(`SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  listUserById: (id_user) => new Promise((resolve, reject) => {
    db.query(`SELECT * FROM users WHERE id_user = ${id_user}`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  destroy: (id_user) => new Promise((resolve, reject) => {
    db.query(`DELETE FROM users WHERE id_user = ${id_user}`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  update: (id_user, password) => new Promise((resolve, reject) => {
    db.query(`UPDATE users SET password = '${password}' WHERE id_user = ${id_user}`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
};
module.exports = userModel;
