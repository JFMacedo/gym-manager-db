const { Pool } = require("pg");

module.exports = new Pool({
  user: "postgres",
  password: "123456",
  port: 5432,
  database: "gym_manager"
});