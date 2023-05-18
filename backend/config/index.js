const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const MONGO = process.env.MONGO;
const ACCESS_TOKEN_SECRETE = process.env.ACCESS_TOKENS;
const REFRESH_TOKEN_SECRETE = process.env.REFRESH_TOKENS;
const BACKEND_SERVER = process.env.BACKEND_SERVER;

module.exports = {
  PORT,
  MONGO,
  ACCESS_TOKEN_SECRETE,
  REFRESH_TOKEN_SECRETE,
  BACKEND_SERVER,
};
