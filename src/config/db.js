const pg = require("pg");

const db = new pg.Pool({
  user: "postgres",
  host: "localhost",
  password: "T301120r",
  database: "db_task_beginnerbe",
  port: 5432,
});
db.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
  } else {
    console.log("Connection established");
  }
});
module.exports = db;

