const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "codeforge",
  password: "cold@8",
  port: 5432,
});

module.exports = pool;