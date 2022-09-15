const pg = require("pg");

const db = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});
db.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
  } else {
    console.log("Connection established");
  }
});
module.exports = db;

