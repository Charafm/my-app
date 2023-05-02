const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.DB_USER || "moujahidc",
  password: process.env.DB_PASSWORD || "YahyaMjhd2001",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3001,
  database: process.env.DB_NAME || "moujahidc",
});
export default pool;
