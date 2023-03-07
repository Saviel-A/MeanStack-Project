require("dotenv").config();

module.exports = {
  port: process.env.port,
  hostname: process.env.hostname,
  apiBaseUrl:
    process.env.API_BASE_URL || "https://jsonplaceholder.typicode.com",
};
